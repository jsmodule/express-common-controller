import { ClassValidator } from 'common-basic-validator';
import BaseController from './BaseController';

class ControllerActionLoader {
  constructor() { }

  loadAction(Controller, actionName) {
    if (this._isValid(Controller, actionName)) {
      return (req, res) => {
        let controller = new Controller(req, res);
        Controller.prototype[actionName].apply(controller);
      };
    }
  }

  _isValid(Controller, actionName) {
    return this._isExtendBaseController(Controller) && ClassValidator.hasMethod(Controller, actionName);
  }

  _isExtendBaseController(Controller) {
    return ClassValidator.isClass(Controller) && ClassValidator.isExtend(BaseController, Controller);
  }
}

export default ControllerActionLoader;
