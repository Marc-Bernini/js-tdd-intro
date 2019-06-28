// capitalizeFirstLetters.js
const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE
const capitalizeFirstLetters = (input) => {
    input = input.split(' ');
    let result = ''

    for (let i = 0; i < input.length; i++) {
        result += input[i].charAt(0).toUpperCase() + input[i].slice(1);
        
        if (i < input.length - 1) {
            result += ' ';
        };
    };
    return result;
};

// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');

// Check that capitalizeFirst accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);

// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(capitalizeFirstLetters('javaScript est un langage informatique'), 'JavaScript Est Un Langage Informatique');

// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');

// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');