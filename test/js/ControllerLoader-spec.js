import path from 'path';
import { expect } from 'chai';
import OldStyleController from './fixtures/OldStyleController';
import NewStyleController from './fixtures/NewStyleController';
import ControllerLoader from '../../src/js/ControllerLoader';

describe('ControllerLoader', () => {
  let controllerLoader;

  describe('loadController', () => {
    beforeEach(() => {
      controllerLoader = new ControllerLoader();
    });

    it('should return nothing when given a no export controller', () => {
      let Controller = controllerLoader.loadController(path.join(__dirname, './fixtures/NoExportController.js'));
      expect(Controller).to.be.undefined;
    });

    it('should return correct controller when replacing exports', () => {
      let Controller = controllerLoader.loadController(path.join(__dirname, './fixtures/OldStyleController.js'));
      let controller = new Controller();
      expect(Controller).to.be.a('function');
      expect(controller).to.be.an.instanceof(OldStyleController);
    });

    it('should return correct controller when using default to export', () => {
      let Controller = controllerLoader.loadController(path.join(__dirname, './fixtures/NewStyleController.js'));
      let controller = new Controller();
      expect(Controller).to.be.a('function');
      expect(controller).to.be.an.instanceof(NewStyleController);
    });
  });
});
