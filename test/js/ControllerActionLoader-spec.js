import sinon from 'sinon';
import chai, { expect } from 'chai';
import SinonChai from 'sinon-chai';
import SingleController from './fixtures/SingleController';
import NewStyleController from './fixtures/NewStyleController';
import ControllerActionLoader from '../../src/js/ControllerActionLoader';
chai.use(SinonChai);

describe('ControllerActionLoader', () => {
  let actionLoader, InvalidController;

  beforeEach(() => {
    actionLoader = new ControllerActionLoader();
  });

  describe('#loadAction', () => {
    it('should return undefined when provide invalid controller', () => {
      expect(actionLoader.loadAction(InvalidController)).to.be.undefined;
    });

    it('should return undefined when provide a controller not based on BaseController', () => {
      expect(actionLoader.loadAction(SingleController)).to.be.undefined;
    });

    it('should return undefined when provide invalid action', () => {
      expect(actionLoader.loadAction(NewStyleController, 'invalidAction')).to.be.undefined;
    });

    it('should return function when provide valid controller and action', () => {
      expect(actionLoader.loadAction(NewStyleController, 'action')).to.be.a('function');
    });
  });

  describe('#loadAction#callBack', () => {
    let callBack, stubClass, stubController;

    beforeEach(() => {
      stubController = sinon.createStubInstance(NewStyleController);
      stubClass = sinon.stub().returns(stubController);
      stubClass.prototype = stubController;
      callBack = actionLoader.loadAction(stubClass, 'action');
      callBack();
    });

    it('should create a instance when invoke callback', () => {
      expect(stubClass).to.have.been.called;
    });

    it('should invoke action when invoke callback', () => {
      expect(stubController.action).to.have.been.called;
    });
  });
});
