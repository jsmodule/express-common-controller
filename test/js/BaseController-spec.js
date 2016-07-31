import sinon from 'sinon';
import chai, { expect } from 'chai';
import SinonChai from 'sinon-chai';
import BaseController from '../../src/js/BaseController';
chai.use(SinonChai);

describe('BaseController', () => {
  let controller;
  let req = {params: () => {}};
  let res = { send: () => {}, json: () => {}, jsonp: () => {} }

  describe('loadAction', () => {
    beforeEach(() => {
      controller = new BaseController();
      controller.request = req;
      controller.response = res;
    });

    it('should call res.send to render message', () => {
      let spy = sinon.spy(res, 'send');
      controller.render('name');
      expect(spy).to.have.been.calledWith('name');
    });

    it('should call res.json to render json object', () => {
      let spy = sinon.spy(res, 'json');
      controller.renderJson('name');
      expect(spy).to.have.been.calledWith('name');
    });

    it('should call res.jsonp to render jsonp object', () => {
      let spy = sinon.spy(res, 'jsonp');
      controller.renderJsonp('name');
      expect(spy).to.have.been.calledWith('name');
    });
  });
});
