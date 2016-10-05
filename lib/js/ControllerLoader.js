'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseController = require('./BaseController');

var _BaseController2 = _interopRequireDefault(_BaseController);

var _commonBasicValidator = require('common-basic-validator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ControllerLoader = function () {
  function ControllerLoader() {
    _classCallCheck(this, ControllerLoader);
  }

  _createClass(ControllerLoader, [{
    key: 'loadHandler',
    value: function loadHandler(controllerFile) {
      var Controller = this._requireController(controllerFile);
      return this._isValid(Controller) ? Controller : null;
    }
  }, {
    key: '_requireController',
    value: function _requireController(controllerFile) {
      var Controller = require(controllerFile);
      return Controller && Controller.__esModule ? Controller.default : Controller;
    }
  }, {
    key: '_isValid',
    value: function _isValid(Controller) {
      return _commonBasicValidator.ClassValidator.isClass(Controller) && _commonBasicValidator.ClassValidator.isExtend(_BaseController2.default, Controller);
    }
  }]);

  return ControllerLoader;
}();

exports.default = ControllerLoader;