import BaseController from '../../../src/js/BaseController'

function OldStyleController() { }

OldStyleController.prototype = new BaseController();

OldStyleController.prototype.action = function() {};

module.exports = OldStyleController;
