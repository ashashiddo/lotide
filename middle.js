const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

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


module.exports = middle; 
  
  