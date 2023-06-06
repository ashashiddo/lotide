const assertEqual = require('../assertEqual');
const findKey = require('../findKey');

// Test

const stars = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
  
};
    
assertEqual(findKey(stars, x => x.stars === 2), "noma");
assertEqual(findKey(stars, x => x.stars === 1), "Blue Hill");
assertEqual(findKey(stars, x => x.stars === 1), "Ora");