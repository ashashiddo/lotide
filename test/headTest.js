const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});

it("returns '5' for ['5']", () => {
  assert.strictEqual(head(['5']), '5');
});

// Test cases

// assertEqual(head([5,6,7]), 5); // ✅✅✅ Assertion Passed: 5 === 5
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // ✅✅✅ Assertion Passed: Hello === Hello
// assertEqual(head([21]), 21); // ✅✅✅ Assertion Passed: 21 === 21
// assertEqual(head([]), undefined); // ✅✅✅ Assertion Passed: undefined === undefined