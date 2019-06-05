const assert = require('chai').assert;
const { addNumber } = require('../add');

const addNumberResult = addNumber(3, 3);

describe('Unit Testing', () => {
  describe('addNumber()', () => {
    const val1 = 5;
    it(`should return above ${val1}`, () => {
      assert.isAbove(addNumberResult, val1);
    });

    const val2 = 'number';
    it(`should return typeof ${val2}`, () => {
      assert.typeOf(addNumberResult, val2);
    });
  });
});
