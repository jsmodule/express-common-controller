import sinon from 'sinon';
import expect from 'expect.js';
import ExampleController from './fake/ExampleController';
import ControllerClassLoader from '../../src/js/ControllerClassLoader';

describe('ControllerClassLoader', () => {
  let classLoader;

  describe('loadAction', () => {
    beforeEach(() => {
      classLoader = new ControllerClassLoader();
    });

    it('return undefined when provide invalid controller', () => {
      let InvalidController;
      expect(classLoader.loadAction(InvalidController)).to.be(undefined);
    });

    it('return undefined when provide invalid action', () => {
      expect(classLoader.loadAction(ExampleController, 'invalidAction')).to.be(undefined);
    });

    it('return function when provide provide valid controller and action', () => {
      expect(classLoader.loadAction(ExampleController, 'action')).to.be.an(Function);
    });
  });
});
