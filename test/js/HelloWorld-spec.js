import expect from 'expect';
import HelloWorld from '../../src/js/HelloWorld';

describe('HelloWorld', () => {
  let helloworld;

  beforeEach(() => {
    helloworld = new HelloWorld();
  });

  it('renders hello world message', () => {
    expect(helloworld.show('World')).toBe('Hello World');
  });
});
