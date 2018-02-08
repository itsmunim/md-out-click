function outClick($document, $parse) {
  'use strict';

  return {
    compile: function ($element, attr) {
      var fn = $parse(attr['onOutClick']);
      return function (scope, element) {
        element.on('click', function (event) {
          event.stopPropagation();
        });

        $document.find('body').on('click', function (event) {
          scope.$apply(function () {
            fn(scope, {$event: event});
          });
        });
      };
    }
  };
}

outClick.$inject = ['$document', '$parse'];

export default outClick;
