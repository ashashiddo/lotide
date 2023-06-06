const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

//Test Cases

let result = letterPositions("Hello");
assertArraysEqual(result["H"], [0]);
assertArraysEqual(result["e"], [1]);
assertArraysEqual(result["l"], [2, 3]);
assertArraysEqual(result["o"], [4]);