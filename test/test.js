const Slides = require('../src/slides');
const assert = require('assert');
describe('Slides', function() {
	describe('getActiveSlide()', function() {
		let slides = new Slides();
		it('Should return a numeric value', function() {
			assert.equal(typeof slides.getActiveSlide(), "number");
		});
		it('Should return an initial value of 0', function() {
			assert.equal(slides.getActiveSlide(), 0);
		});
	});
});
