class BaseController {
  constructor() {
  }

  setRequest(req) {
    this.req = req;
  }

  setResponse(res) {
    this.res = res;
  }
}

export default BaseController;
