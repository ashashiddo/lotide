const eqArrays = require('../eqArrays');

const assertArraysEqual = require('../assertArraysEqual');

const middle = require('../middle');

// Test
assertArraysEqual(middle([1]), []); // Pass
assertArraysEqual(middle([1, 2]), []); // Pass
assertArraysEqual(middle([1, 2, 3]), [2]); // Pass
