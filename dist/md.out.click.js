/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _outClick = __webpack_require__(1);

var _outClick2 = _interopRequireDefault(_outClick);

var _outClick3 = __webpack_require__(2);

var _outClick4 = _interopRequireDefault(_outClick3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('mdOutClick', []);
angular.module('mdOutClick').directive('onOutClick', _outClick2.default).service('OutClickService', _outClick4.default);

exports.default = angular.module('mdOutClick');

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function outClick($document, $parse) {
  'use strict';

  return {
    compile: function compile($element, attr) {
      var fn = $parse(attr['onOutClick']);
      return function (scope, element) {
        element.on('click', function (event) {
          event.stopPropagation();
        });

        $document.find('body').on('click', function (event) {
          scope.$apply(function () {
            fn(scope, { $event: event });
          });
        });
      };
    }
  };
}

outClick.$inject = ['$document', '$parse'];

exports.default = outClick;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OutClickService = function () {
  function OutClickService($document) {
    var _this = this;

    _classCallCheck(this, OutClickService);

    this._outClickHandlerMap = {};
    this._handlerCount = 0;
    $document.find('body').on('click', function (event) {
      Object.keys(_this._outClickHandlerMap).forEach(function (handlerId) {
        _this._outClickHandlerMap[handlerId](event);
      });
    });
  }

  _createClass(OutClickService, [{
    key: 'register',
    value: function register(element, handler) {
      this._handlerCount++;
      element.$$outClickService = {
        handlerId: this._handlerCount
      };

      element.on('click', function (event) {
        event.stopPropagation();
      });

      this._outClickHandlerMap[this._handlerCount] = handler;
    }
  }, {
    key: 'unregister',
    value: function unregister(element) {
      var handlerId = (element.$$outClickService || {}).handlerId;
      delete this._outClickHandlerMap[handlerId];
    }
  }]);

  return OutClickService;
}();

OutClickService.$inject = ['$document'];

exports.default = OutClickService;

/***/ })
/******/ ]);
//# sourceMappingURL=md.out.click.js.map