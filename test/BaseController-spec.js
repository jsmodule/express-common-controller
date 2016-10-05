import sinon from 'sinon';
import chai, { expect } from 'chai';
import SinonChai from 'sinon-chai';
import BaseController from '../src/js/BaseController';
chai.use(SinonChai);

describe('BaseController', () => {
  let controller;
  let req = { params: () => {} };
  let res = { send: () => {}, json: () => {}, jsonp: () => {} }

  beforeEach(() => {
    controller = new BaseController();
    controller.request = req;
    controller.response = res;
  });

  describe('#render', () => {
    let spy = sinon.spy(res, 'send');

    it('should call res.send to render message', () => {
      controller.render('name');
      expect(spy).to.have.been.calledWith('name');
    });
  });

  describe('#renderJson', () => {
    let spy = sinon.spy(res, 'json');

    it('should call res.json to render json object', () => {
      controller.renderJson('name');
      expect(spy).to.have.been.calledWith('name');
    });
  });

  describe('#renderJsonp', () => {
    let spy = sinon.spy(res, 'jsonp');

    it('should call res.jsonp to render jsonp object', () => {
      controller.renderJsonp('name');
      expect(spy).to.have.been.calledWith('name');
    });
  });
});
