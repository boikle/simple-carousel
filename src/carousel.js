// Name: Carousel
// Description: The Carousel class produces an object which creates a Slides
// object, and increments the slides at a set interval of time.
const Slides = require('./slides');

class Carousel {
	constructor() {
		this.slideDeck = new Slides();
		this.msInterval = this.getInterval();
	}

	getInterval() {
		let interval;
		let minInterval = 1000;
		let el = document.getElementById('simple-carousel');
		let defaultInterval = 10000;
		let definedInterval = parseInt(el.getAttribute('slide-interval'));

		if (!isNaN(definedInterval)
			&& definedInterval > minInterval) {
			interval = parseInt(definedInterval);
		} else {
			interval = defaultInterval;
		}

		return interval;
	}

	rotateSlides() {
		let _this = this;
		let slides = this.slideDeck.getSlides();
		let slide = slides[this.slideDeck.getActiveSlideIndex()];
		this.slideDeck.activateSlide(slide);

		window.setInterval(function() {
			_this.slideDeck.incrementCurrentSlide();
			_this.slideDeck.deactivateSlide(slide);
			slide = slides[_this.slideDeck.getActiveSlideIndex()];
			_this.slideDeck.activateSlide(slide);
		}, this.msInterval);
	}
}

export function startCarousel() {
	let carousel = new Carousel();
	carousel.rotateSlides();
}

