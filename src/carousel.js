// import {Slides} from './slides';
const Slides = require('./slides');

class Carousel {
	constructor() {
		this.slideDeck = new Slides();
		this.transitionTime = 5000;
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
		}, this.transitionTime);
	}
}

export function startCarousel() {
	let carousel = new Carousel();
	carousel.rotateSlides();
}

