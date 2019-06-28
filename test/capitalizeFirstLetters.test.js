// capitalizeFirstLetters.js
const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

// give the test suite a label using describe
describe('capitalizeFirstLetters', ()=> {
    // give the test a label using it
    it('is a funciton accpeting one argument', () => {
        assert.strictEqual(typeof capitalizeFirstLetters, 'function');
        assert.strictEqual(capitalizeFirstLetters.length, 1);
    });

    
    it('transform javaScript est un langage informatique correctly', () => {
        assert.strictEqual(capitalizeFirstLetters('javaScript est un langage informatique'), 'JavaScript Est Un Langage Informatique');
    });

    it('works with one character', () => {
        assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
    });

    it('works with an emtpy string', () => {
        assert.strictEqual(capitalizeFirstLetters(''), '');
    });
});
