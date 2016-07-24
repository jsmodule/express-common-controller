import BaseController from './BaseController';

class ControllerClassLoader {
  constructor() { }

  loadAction(Controller, actionName) {
    if (isValid(Controller, actionName)) {
      return (req, res) => {
        let controller = new Controller();
        controller.setRequest(req);
        controller.setResponse(res);
        Controller.prototype[actionName].apply(controller);
      };
    }
  }
}

function isValid(Controller, actionName) {
  return isBaseController(Controller) && Controller.prototype.hasOwnProperty(actionName);
}

function isBaseController(Controller) {
  return Controller != undefined && Controller != null && Controller.prototype instanceof BaseController;
}

export default ControllerClassLoader;
