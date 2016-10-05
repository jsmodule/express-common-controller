import ExpressCommonRouter from 'express-common-router';
import ControllerManager from './ControllerManager';

class ExpressCommonControllerRouter extends ExpressCommonRouter {
  constructor(path) {
    super(path);
    this._manager = new ControllerManager(path);
  }
}

export default ExpressCommonControllerRouter;
