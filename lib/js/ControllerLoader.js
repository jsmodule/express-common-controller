'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ControllerLoader = function () {
  function ControllerLoader() {
    _classCallCheck(this, ControllerLoader);
  }

  _createClass(ControllerLoader, [{
    key: 'loadController',
    value: function loadController(controllerFile) {
      var controller = require(controllerFile);
      if (this.isValid(controller)) {
        return this.getController(controller);
      }
    }
  }, {
    key: 'getController',
    value: function getController(controller) {
      return controller.hasOwnProperty('default') ? controller.default : controller;
    }
  }, {
    key: 'isValid',
    value: function isValid(controller) {
      return isValidObj(controller) && (!isEmpty(controller) || isFunction(controller));
    }
  }]);

  return ControllerLoader;
}();

function isValidObj(obj) {
  return obj !== undefined && obj !== null;
}

function isEmpty(obj) {
  return Object.keys(obj) < 1;
}

function isFunction(fun) {
  return typeof fun === 'function';
}

exports.default = ControllerLoader;