const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

//Test Case
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const expected = [6, 7, 2, 5, 3];
const actual = map(words, word => word.length);
assertArraysEqual(actual, expected); // Pass
