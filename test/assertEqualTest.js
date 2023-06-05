const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");// 🛑🛑🛑 Assertion Failed: Lighthouse Labs !== Bootcamp
assertEqual(1, 1); // ✅✅✅ Assertion Passed: 1 === 1
assertEqual("Hello", "Hello"); // ✅✅✅ Assertion Passed: Hello === Hello
assertEqual("Apple", "Orange"); // 🛑🛑🛑 Assertion Failed: Apple !== Orange
assertEqual(21, 21); // ✅✅✅ Assertion Passed: 21 === 21
assertEqual(5, 10); // 🛑🛑🛑 Assertion Failed: 5 !== 10