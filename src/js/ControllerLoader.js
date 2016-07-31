class ControllerLoader {
  constructor() { }

  loadController(controllerFile) {
    let controller = require(controllerFile);
    if (this.isValid(controller)) {
      return this.getController(controller);
    }
  }

  getController(controller) {
    return controller.hasOwnProperty('default')? controller.default : controller;
  }

  isValid(controller) {
    return isValidObj(controller) && (!isEmpty(controller) || isFunction(controller));
  }
}

function isValidObj(obj) {
  return obj !== undefined && obj !== null;
}

function isEmpty(obj) {
  return Object.keys(obj) < 1;
}

function isFunction(fun) {
  return typeof fun === 'function';
}

export default ControllerLoader;
