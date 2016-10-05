import path from 'path';
import { expect } from 'chai';
import SingleController from './fixtures/SingleController';
import ControllerLoader from '../../src/js/ControllerLoader';
import OldStyleController from './fixtures/OldStyleController';
import NewStyleController from './fixtures/NewStyleController';

describe('ControllerLoader', () => {
  let controllerLoader;

  beforeEach(() => {
    controllerLoader = new ControllerLoader();
  });

  describe('#loadController', () => {
    it('should return null when given a no export controller', () => {
      let Controller = controllerLoader.loadHandler(path.join(__dirname, './fixtures/NoExportController.js'));
      expect(Controller).to.be.null;
    });

    it('should return null when given a single controller', () => {
      let Controller = controllerLoader.loadHandler(path.join(__dirname, './fixtures/SingleController.js'));
      expect(Controller).to.be.null;
    });

    it('should return correct controller when replacing exports', () => {
      let Controller = controllerLoader.loadHandler(path.join(__dirname, './fixtures/OldStyleController.js'));
      let controllerObj = new Controller();
      expect(Controller).to.be.a('function');
      expect(controllerObj).to.be.an.instanceof(OldStyleController);
    });

    it('should return correct controller when using default to export', () => {
      let Controller = controllerLoader.loadHandler(path.join(__dirname, './fixtures/NewStyleController.js'));
      let controllerObj = new Controller();
      expect(Controller).to.be.a('function');
      expect(controllerObj).to.be.an.instanceof(NewStyleController);
    });
  });
});
