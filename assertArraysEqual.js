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
    console.log('✅✅✅ Assertion Passed: 1 === 1');
  } else {
    console.log('🛑🛑🛑 Assertion Failed: Lighthouse Labs !== Bootcamp');
  }
};

/// TEST Cases

assertArraysEqual([1, 2, 3], [1, 2, 3]); // ✅✅✅ Pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // 🛑🛑🛑 Fail
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // 🛑🛑🛑 Fail
