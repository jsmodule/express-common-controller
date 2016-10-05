'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _commonBasicValidator = require('common-basic-validator');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ControllerActionLoader = function () {
  function ControllerActionLoader() {
    _classCallCheck(this, ControllerActionLoader);
  }

  _createClass(ControllerActionLoader, [{
    key: 'loadAction',
    value: function loadAction(Controller, actionName) {
      if (this._isValid(Controller, actionName)) {
        return function (req, res) {
          var controllerObj = new Controller();
          controllerObj.request = req;
          controllerObj.response = res;
          Controller.prototype[actionName].apply(controllerObj);
        };
      }
    }
  }, {
    key: '_isValid',
    value: function _isValid(Controller, actionName) {
      return _commonBasicValidator.ClassValidator.isClass(Controller) && _commonBasicValidator.ClassValidator.hasMethod(Controller, actionName);
    }
  }]);

  return ControllerActionLoader;
}();

exports.default = ControllerActionLoader;