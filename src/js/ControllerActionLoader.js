import { ClassValidator } from 'common-basic-validator';

class ControllerActionLoader {
  constructor() { }

  loadAction(Controller, actionName) {
    if (this._isValid(Controller, actionName)) {
      return (req, res) => {
        let controllerObj = new Controller();
        controllerObj.request = req;
        controllerObj.response = res;
        Controller.prototype[actionName].apply(controllerObj);
      };
    }
  }

  _isValid(Controller, actionName) {
    return ClassValidator.isClass(Controller) && ClassValidator.hasMethod(Controller, actionName);
  }
}

export default ControllerActionLoader;
