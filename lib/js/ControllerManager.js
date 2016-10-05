'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expressCommonRouter = require('express-common-router');

var _ControllerLoader = require('./ControllerLoader');

var _ControllerLoader2 = _interopRequireDefault(_ControllerLoader);

var _ControllerActionLoader = require('./ControllerActionLoader');

var _ControllerActionLoader2 = _interopRequireDefault(_ControllerActionLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ControllerManager = function (_HandlerManager) {
  _inherits(ControllerManager, _HandlerManager);

  function ControllerManager(path) {
    _classCallCheck(this, ControllerManager);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ControllerManager).call(this, path));

    _this._handlerLoader = new _ControllerLoader2.default();
    _this._actionLoader = new _ControllerActionLoader2.default();
    return _this;
  }

  return ControllerManager;
}(_expressCommonRouter.HandlerManager);

exports.default = ControllerManager;