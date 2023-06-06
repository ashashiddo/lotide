const eqObjects = require('../eqObjects');
const assertObjectsEqual = require('../assertObjectsEqual');

//Test

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 2, a: 1 };
assertObjectsEqual(obj1, obj2);

const obj3 = { a: 1, b: 2 };
const obj4 = { a: 1, b: 3 };
assertObjectsEqual(obj3, obj4);