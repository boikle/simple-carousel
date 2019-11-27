const Slides = require('../src/slides');
const assert = require('assert');
describe('Slides', function() {
	let slides = new Slides();
	describe('getActiveSlide()', function() {
		it('Should return a numeric value', function() {
			assert.equal(typeof slides.getActiveSlideIndex(), "number");
		});
		it('Should return an initial value of 0', function() {
			assert.equal(slides.getActiveSlideIndex(), 0);
		});
	});

	describe('setActiveSlide()', function() {
		it('Should set active slide index to 1', function() {
			slides.setActiveSlideIndex(1);
			assert.equal(slides.getActiveSlideIndex(), 1);
		});
	});
});
