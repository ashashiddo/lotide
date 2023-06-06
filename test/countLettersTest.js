const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

// Test cases
const result1 = countLetters("Lighthouse");
assertEqual(result1["L"], 1);
assertEqual(result1["i"], 1);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 2);
assertEqual(result1["t"], 1);
assertEqual(result1["o"], 1);
assertEqual(result1["u"], 1);
assertEqual(result1["s"], 1);
assertEqual(result1["e"], 1);