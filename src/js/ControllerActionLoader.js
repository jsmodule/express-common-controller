import { ClassValidator } from 'common-basic-validator';

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
    return ClassValidator.isClass(Controller) && ClassValidator.hasMethod(Controller, actionName);
  }
}

export default ControllerActionLoader;
