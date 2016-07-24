import { BaseController } from '../../../lib';

class HelloController extends BaseController {
  constructor() {
    super();
  }

  hello() {
    this.render('HelloWorld');
  }
}

export default HelloController;
