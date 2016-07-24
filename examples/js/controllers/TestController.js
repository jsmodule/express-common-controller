const BaseController = require('../../../lib').BaseController;

function TestController() {}

TestController.prototype = new BaseController();

TestController.prototype.index = function() {
  this.render("Hello Index");
};

TestController.prototype.show = function() {
  this.render("Hello Show");
};

module.exports = TestController;
