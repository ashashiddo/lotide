const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed: (actual) === (expected)');
  } else {
    console.log('🛑🛑🛑 Assertion Failed: (actual) !== (expected)');
  }

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");// Assertion Failed: (actual) !== (expected)
assertEqual(1, 1); // Assertion Passed: (actual) === (expected)
assertEqual("Hello", "Hello"); // Assertion Passed: (actual) === (expected)
assertEqual("Apple", "Orange"); // Assertion Failed: (actual) !== (expected)
assertEqual(21, 21); // Assertion Passed: (actual) === (expected)
assertEqual(5, 10); // Assertion Failed: (actual) !== (expected)

