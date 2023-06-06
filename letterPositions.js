const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

const letterPositions = function(str) {
  const results = {};

  for (const i in str) {
    const letter = str[i];

    if (letter === ' ') {
      continue;
    }
    if (!results[letter]) {
      results[letter] = [];
    }

    results[letter].push(Number(i));
  }
  return results;
};

let result = letterPositions("Hello");
assertArraysEqual(result["H"], [0]);
assertArraysEqual(result["e"], [1]);
assertArraysEqual(result["l"], [2, 3]);
assertArraysEqual(result["o"], [4]);
