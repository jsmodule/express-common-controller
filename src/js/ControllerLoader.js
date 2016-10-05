import BaseController from './BaseController';
import { ClassValidator } from 'common-basic-validator';

class ControllerLoader {
  constructor() { }

  loadHandler(controllerFile) {
    let Controller = this._requireController(controllerFile);
    return this._isValid(Controller) ? Controller : null;
  }

  _requireController(controllerFile) {
    let Controller = require(controllerFile);
    return Controller && Controller.__esModule ? Controller.default : Controller;
  }

  _isValid(Controller) {
    return ClassValidator.isClass(Controller) && ClassValidator.isExtend(BaseController, Controller);
  }
}

export default ControllerLoader;
