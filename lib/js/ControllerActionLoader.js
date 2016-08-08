'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseController = require('./BaseController');

var _BaseController2 = _interopRequireDefault(_BaseController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ControllerActionLoader = function () {
  function ControllerActionLoader() {
    _classCallCheck(this, ControllerActionLoader);
  }

  _createClass(ControllerActionLoader, [{
    key: 'loadAction',
    value: function loadAction(Controller, actionName) {
      if (this.isValid(Controller, actionName)) {
        return function (req, res) {
          var controller = new Controller();
          controller.request = req;
          controller.response = res;
          Controller.prototype[actionName].apply(controller);
        };
      }
    }
  }, {
    key: 'isValid',
    value: function isValid(Controller, actionName) {
      return this.isKindOfBaseController(Controller) && Controller.prototype.hasOwnProperty(actionName);
    }
  }, {
    key: 'isKindOfBaseController',
    value: function isKindOfBaseController(Controller) {
      return Controller != undefined && Controller != null && Controller.prototype instanceof _BaseController2.default;
    }
  }]);

  return ControllerActionLoader;
}();

exports.default = ControllerActionLoader;