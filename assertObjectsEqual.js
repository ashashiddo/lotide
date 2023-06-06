const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  for (const key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  
  return true;
};
  
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

//Test

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 2, a: 1 };
assertObjectsEqual(obj1, obj2);

const obj3 = { a: 1, b: 2 };
const obj4 = { a: 1, b: 3 };
assertObjectsEqual(obj3, obj4);


module.exports = assertObjectsEqual;