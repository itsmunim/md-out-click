describe('mdOutClick: OutClickService', function () {
  'use strict';

  var element, parentElement, $scope, $document, onClickHandler, outClickHandler, OutClickService;

  function _createElements() {
    element = angular.element('<button>Submit</button>');
    parentElement = angular.element('<div></div>');
    parentElement.append(element);
    $document.find('body').append(parentElement);
  }

  /**
   * Due to an issue in phantomjs; any element.trigger('click') doesn't bubble up.
   */
  function _dispatchBubbledClickEvent(element) {
    element[0].dispatchEvent(new Event('click', { 'bubbles': true }));
  }

  beforeEach(module('mdOutClick'));

  beforeEach(inject(function (_$document_, _OutClickService_, $rootScope) {
    $document = _$document_;
    OutClickService = _OutClickService_;
    $scope = $rootScope.$new();
    _createElements();
    onClickHandler = jasmine.createSpy();
    outClickHandler = jasmine.createSpy();
    element.on('click', onClickHandler);
    OutClickService.register(element, outClickHandler);
  }));

  afterEach(function () {
    parentElement.remove();
  });

  describe('.register', function () {
    it('should not hamper on click event of the element to be registered', function () {
      _dispatchBubbledClickEvent(element);
      expect(onClickHandler).toHaveBeenCalled();
    });

    it('should add the ability to fire specified handlers for outside clicks', function () {
      _dispatchBubbledClickEvent(parentElement);
      expect(outClickHandler).toHaveBeenCalled();
    });

    it('should keep the on click event behaviour same when clicked outside', function () {
      _dispatchBubbledClickEvent(parentElement);
      expect(onClickHandler.calls.count()).toEqual(0);
    });
  });

  describe('.unregister', function () {
    beforeEach(function () {
      OutClickService.unregister(element);
    });

    it('should disable outside click handler from firing', function () {
      _dispatchBubbledClickEvent(parentElement);
      expect(outClickHandler.calls.count()).toEqual(0);
    });

    it('should keep the on click handler intact', function () {
      _dispatchBubbledClickEvent(element);
      expect(onClickHandler).toHaveBeenCalled();
    });
  });
});
