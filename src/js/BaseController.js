class BaseController {
  constructor() {
  }

  set request(req) {
    this.req = req;
  }

  get request() {
    return this.req;
  }

  set response(res) {
    this.res = res;
  }

  get response() {
    return this.res;
  }

  render(response) {
    this.res.send(response);
  }

  renderJson(jsonObj) {
    this.res.json(jsonObj);
  }

  renderJsonp(jsonObj) {
    this.res.jsonp(jsonObj);
  }
}

export default BaseController;
