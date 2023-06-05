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

const middle = function(array) {
  if (array.length < 3) {  // if array is less than 3 it will be an empty array
    return [];
  } else if (array.length % 2 === 0) {
    return array.slice(array.length / 2 - 1, array.length / 2 + 1); // this checks if there is an even number - slice two middle numbers
  } else {
    let middleIndex = Math.floor(array.length / 2); //if the above cannot be met / by 2
    return [array[middleIndex]];
  }
};
  
// Test
assertArraysEqual(middle([1]), []); // Pass
assertArraysEqual(middle([1, 2]), []); // Pass
assertArraysEqual(middle([1, 2, 3]), [2]); // Pass


  
  