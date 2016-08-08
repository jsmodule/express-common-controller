import path from 'path';
import babelRegister from 'babel-register';
import { ExpressCommonRouter } from 'express-common-router';
import { ControllerLoader, ControllerActionLoader } from '../lib';

const router = new ExpressCommonRouter();

router.controllerPath = path.join(__dirname, './js/controllers');
router.controllerLoader = new ControllerLoader();
router.actionLoader = new ControllerActionLoader();

router.get('/hello', 'HelloController#hello');
router.get('/test/index', 'TestController#index');
router.get('/test/show', 'TestController#show');

module.exports = router.routes();
