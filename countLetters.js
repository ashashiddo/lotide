const assertEqual = require('./assertEqual');

const countLetters = function(str) {
  const result = {};

  for (const letter of str) {
    if (letter === ' ') {
      continue;
    }
    if (!result[letter]) {
      result[letter] = 0;
    }
    result [letter]++;
  }
  return result;
};

// // Test cases
// const result1 = countLetters("Lighthouse");
// assertEqual(result1["L"], 1);
// assertEqual(result1["i"], 1);
// assertEqual(result1["g"], 1);
// assertEqual(result1["h"], 2);
// assertEqual(result1["t"], 1);
// assertEqual(result1["o"], 1);
// assertEqual(result1["u"], 1);
// assertEqual(result1["s"], 1);
// assertEqual(result1["e"], 1);

module.exports = countLetters; 