import { HandlerManager } from 'express-common-router';
import ControllerLoader from './ControllerLoader';
import ControllerActionLoader from './ControllerActionLoader';

class ControllerManager extends HandlerManager {
  constructor(path) {
    super(path);
    this._handlerLoader = new ControllerLoader();
    this._actionLoader = new ControllerActionLoader();
  }
}

export default ControllerManager;
