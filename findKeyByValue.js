const assertEqual = require('./assertEqual');

const findKeyByValue = function(obj, val) {
  for (const key of Object.keys(obj)) {
    if (obj[key] === val) {
      return key;
    }
  }
  return undefined;
};
 module.exports = findKeyByValue;