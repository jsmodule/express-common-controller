import BaseController from './BaseController';

class ControllerActionLoader {
  constructor() { }

  loadAction(Controller, actionName) {
    if (this.isValid(Controller, actionName)) {
      return (req, res) => {
        let controller = new Controller();
        controller.request = req;
        controller.response = res;
        Controller.prototype[actionName].apply(controller);
      };
    }
  }

  isValid(Controller, actionName) {
    return this.isKindOfBaseController(Controller) && Controller.prototype.hasOwnProperty(actionName);
  }

  isKindOfBaseController(Controller) {
    return Controller != undefined && Controller != null && Controller.prototype instanceof BaseController;
  }
}

export default ControllerActionLoader;
