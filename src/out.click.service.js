class OutClickService {
  constructor($document) {
    this._outClickHandlerMap = {};
    this._handlerCount = 0;
    $document.find('body').on('click', (event) => {
      Object.keys(this._outClickHandlerMap).forEach((handlerId) => {
        this._outClickHandlerMap[handlerId](event);
      })
    });
  }

  register(element, handler) {
    this._handlerCount++;
    element.$$outClickService = {
      handlerId: this._handlerCount
    };

    element.on('click', (event) => {
      event.stopPropagation();
    });

    this._outClickHandlerMap[this._handlerCount] = handler;
  }

  unregister(element) {
    let handlerId = (element.$$outClickService || {}).handlerId;
    delete this._outClickHandlerMap[handlerId];
  }
}

OutClickService.$inject = ['$document'];

export default OutClickService;
