const assert = require('chai').assert;
const { sayHello } = require('../app');

const sayHelloResult = sayHello();

describe('Unit Testing', () => {
  describe('sayHello()', () => {
    const val1 = 'hello';
    it(`should return ${val1}`, () => {
      assert.equal(sayHelloResult, val1);
    });

    const val2 = 'string';
    it(`should return typeof ${val2}`, () => {
      assert.typeOf(sayHelloResult, val2);
    });
  });
});
