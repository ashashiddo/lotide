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

module.exports = countLetters; 