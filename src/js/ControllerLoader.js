class ControllerLoader {
  constructor() { }

  loadController(controllerFile) {
    let controller = require(controllerFile);
    if (isValid(controller)) {
      if (controller.hasOwnProperty('default')) {
        return controller.default;
      }else {
        return controller;
      }
    }
  }
}

function isValid(controller) {
  return controller != undefined && controller != null;
}

export default ControllerLoader;
