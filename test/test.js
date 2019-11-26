const Slides = require('../src/slides');
const assert = require('assert');
describe('Slides', function() {
	let slides = new Slides();
	describe('getActiveSlide()', function() {
		it('Should return a numeric value', function() {
			assert.equal(typeof slides.getActiveSlide(), "number");
		});
		it('Should return an initial value of 0', function() {
			assert.equal(slides.getActiveSlide(), 0);
		});
	});

	describe('setActiveSlide()', function() {
		it('Should set active slide index to 1', function() {
			slides.setActiveSlide(1);
			assert.equal(slides.getActiveSlide(), 1);
		});
	});
});
