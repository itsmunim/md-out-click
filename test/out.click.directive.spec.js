describe('mdOutClick: on-out-click directive', function () {
  'use strict';

  var $scope, element, $body, $document, $compile;
  var NO_CLICK = 0;
  var ELEMENT_CLICK = 1;
  var OUTSIDE_CLICK = 2;

  function _compileDirective() {
    var template = '<button ng-click="clickState = 1" on-out-click="clickState = 2"></button>';
    $scope.clickState = NO_CLICK;
    element = $compile(template)($scope);
    $scope.$digest();
  }

  beforeEach(module('mdOutClick'));

  beforeEach(inject(function ($rootScope, _$document_, _$compile_) {
    $compile = _$compile_;
    $document = _$document_;
    $scope = $rootScope.$new();

    $body = {
      eventHandlers: {},
      click: function () {
        var self = this;
        self.eventHandlers.click();
      },
      on: function (eventName, handler) {
        var self = this;
        self.eventHandlers[eventName] = handler;
      }
    };

    spyOn($document, 'find').and.callFake(function () {
      return $body;
    });
  }));

  describe('before clicking, click on element and outside the element', function () {
    beforeEach(function () {
      _compileDirective();
    });

    afterEach(function () {
      element.remove();
    });

    it('should keep the click state defined in scope as it is', function () {
      expect($scope.clickState).toBe(NO_CLICK);
    });

    it('should change the click state so that it reflects the click was on element', function () {
      element.triggerHandler('click');
      expect($scope.clickState).toBe(ELEMENT_CLICK);
    });

    it('should change the click state so that it reflects the click was outside the element', function () {
      $body.click();
      expect($scope.clickState).toBe(OUTSIDE_CLICK);
    });
  });
});
