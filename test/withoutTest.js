const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

// Testing Cases

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // Pass [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // Pass [1,2]
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]); // Pass [1, 2, 3]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // pass hello,world,lighthouse