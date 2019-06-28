const assert = require('assert');
const Rectangle = require('../rectangle');

describe('Check Rectangle class method', ()=> {
    
    it('isSquare returns true if instance is created with equal size', () => {
        const rectangle = new Rectangle(5, 5);
        assert.strictEqual(rectangle.isSquare(), true);
    });

    it('isSquare returns false if instance is created with different size', () => {
        const rectangle = new Rectangle(5, 10);
        assert.strictEqual(rectangle.isSquare(), false);
    });

    it('getArea return rectangle\'s area', () => {
        const rectangle = new Rectangle(13, 7);
        assert.strictEqual(rectangle.getArea(), 91);
    });

    it('getPerimeter return rectangle\'s perimeter', () => {
        const rectangle = new Rectangle(13, 7);
        assert.strictEqual(rectangle.getPerimeter(), 40);
    });
});