import BaseController from '../../../src/js/BaseController';

class ExampleController extends BaseController {
  constructor() {
    super();
    console.log('Ss');
  }

  action() {
    console.log("haha");
  }
}

export default ExampleController;
