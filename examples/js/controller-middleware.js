import path from 'path';
import babelRegister from 'babel-register';
import ControllerMiddleware from 'express-controller-middleware';
import { ControllerLoader, ControllerActionLoader } from '../../lib';

const middleware = new ControllerMiddleware();

middleware.setControllerPath(path.join(__dirname, './controllers'));
middleware.setControllerLoader(new ControllerLoader());
middleware.setActionLoader(new ControllerActionLoader());

middleware.get('/hello', 'HelloController#hello');
middleware.get('/test/index', 'TestController#index');
middleware.get('/test/show', 'TestController#show');

module.exports = middleware;
