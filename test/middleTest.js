const chai = require('chai');
const assert = chai.assert;
const middle = require('../middle');

describe('middle', () => {
    it('returns []', () => {
      const result = middle([1]);
      assert.deepEqual(result, []);
    });
  
    it('returns []', () => {
      const result = middle([1, 2]);
      assert.deepEqual(result, []);
    });
  
    it('returns [2]', () => {
      const result = middle([1, 2, 3]);
      assert.deepEqual(result, [2]);
    });
  });

// // Test
// assertArraysEqual(middle([1]), []); // Pass
// assertArraysEqual(middle([1, 2]), []); // Pass
// assertArraysEqual(middle([1, 2, 3]), [2]); // Pass
