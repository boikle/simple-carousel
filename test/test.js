//const Carousel = require('../src/carousel.js');
const Slides = require('../src/slides');
const SlideIndex = require('../src/slide-index.js');
const assert = require('assert');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;
const dom = new JSDOM(
	`<!doctype html>
	<html>
		<head>
			<title>Simple Carousel</title>
		</head>
		<body>
			<div id="simple-carousel" slide-interval="8000">
				<div class="slide-deck">
					<div class="slide" style="background-image:url(./slide1.jpg);">
						<div class="label">Slide 1 - This is the first slide.</div>
					</div>
					<div class="slide" style="background-image:url(./slide2.jpg);">
						<div class="label">Slide 2 - This is the second slide.</div>
					</div>
					<div class="slide" style="background-image:url(./slide3.jpg);">
						<div class="label">Slide 3 - This is the third slide.</div>
					</div>
				</div>
			</div>
		</body>
	</html>	`
);

global.document = dom.window.document;

// Slide class tests
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

	describe('getSlides()', function() {
		it('Should return an HTML Collection of length 3', function() {
			let deck = slides.getSlides();
			assert.equal(deck.length, 3);
		});
	});
});

// SlideIndex class test
describe('SlideIndex', function() {
	let slideIndex = new SlideIndex();
	describe('getDeckSize()', function() {
		it('Should return a value of 3', function() {
			assert.equal(slideIndex.getDeckSize(), 3);
		});
	});
});
