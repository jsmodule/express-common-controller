import path from 'path';
import ExpressCommonControllerRouter from '../lib';

const router = new ExpressCommonControllerRouter();

router.path = path.join(__dirname, './js/controllers');

router.get('/hello', 'HelloController#hello');
router.get('/test/index', 'TestController#index');
router.get('/test/show', 'TestController#show');

module.exports = router.routes();
