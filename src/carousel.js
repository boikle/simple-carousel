// Name: Carousel
// Description: The Carousel class creates a Slides object,
// and increments the slides at a set interval of time.
const Slides = require('./slides');

class Carousel {
	constructor() {
		this.rotationInterval;
		let _this = this;
		this.slideDeck = new Slides();
		this.msInterval = this.getInterval();

		// Update active slide when event occurs
		document.addEventListener('updateActiveSlide', function(event) {
			window.clearInterval(_this.rotationInterval);
			_this.slideDeck.setActiveSlideIndex(event.detail.slideIndex);
			_this.rotateSlides();
		});
	}

	// Get the slide interval. If not defined in simple carousel div, a default
	// value of 10sec interval.
	getInterval() {
		let interval;
		let minInterval = 1000;
		let el = document.getElementById('simple-carousel');
		if (el) {
			let defaultInterval = 10000;
			let definedInterval = parseInt(el.getAttribute('slide-interval'));

			if (!isNaN(definedInterval)
				&& definedInterval >= minInterval) {
				interval = parseInt(definedInterval);
			} else {
				interval = defaultInterval;
			}

			return interval;
		}
	}

	rotateSlides() {
		let _this = this;

		this.rotationInterval = window.setInterval(function() {
			_this.slideDeck.incrementCurrentSlide();
		}, this.msInterval);
	}
}

export function startCarousel() {
	let carousel = new Carousel();
	carousel.rotateSlides();
}

