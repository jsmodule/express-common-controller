"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseController = function () {
  function BaseController(req, res) {
    _classCallCheck(this, BaseController);

    this.req = req;
    this.res = res;
  }

  _createClass(BaseController, [{
    key: "render",
    value: function render(message) {
      this.res.send(message);
    }
  }, {
    key: "renderJson",
    value: function renderJson(jsonObj) {
      this.res.json(jsonObj);
    }
  }, {
    key: "renderJsonp",
    value: function renderJsonp(jsonObj) {
      this.res.jsonp(jsonObj);
    }
  }, {
    key: "request",
    set: function set(req) {
      this.req = req;
    },
    get: function get() {
      return this.req;
    }
  }, {
    key: "response",
    set: function set(res) {
      this.res = res;
    },
    get: function get() {
      return this.res;
    }
  }]);

  return BaseController;
}();

exports.default = BaseController;