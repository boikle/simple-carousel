// Name: Carousel
// Description: The Carousel class produces an object which creates a Slides
// object, and increments the slides at a set interval of time.
const Slides = require('./slides');

class Carousel {
	constructor() {
		this.slideDeck = new Slides();
		this.msInterval = 5000;
	}

	rotateSlides() {
		let _this = this;
		let slides = this.slideDeck.getSlides();
		let slide = slides[this.slideDeck.getActiveSlide()];
		this.slideDeck.activateSlide(slide);

		window.setInterval(function() {
			_this.slideDeck.incrementCurrentSlide();
			_this.slideDeck.deactivateSlide(slide);
			slide = slides[_this.slideDeck.getActiveSlide()];
			_this.slideDeck.activateSlide(slide);
		}, this.msInterval);
	}
}

export function startCarousel() {
	let carousel = new Carousel();
	carousel.rotateSlides();
}

