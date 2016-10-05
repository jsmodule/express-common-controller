class BaseController {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  set request(req) { this.req = req; }
  get request() { return this.req; }

  set response(res) { this.res = res; }
  get response() { return this.res; }

  render(message) {
    this.res.send(message);
  }

  renderJson(jsonObj) {
    this.res.json(jsonObj);
  }

  renderJsonp(jsonObj) {
    this.res.jsonp(jsonObj);
  }
}

export default BaseController;
