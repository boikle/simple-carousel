import {Slides} from './slides';

let Carousel = function() {
	this.slideDeck = new Slides();
};

Carousel.prototype.rotateSlides = function() {
	let _this = this;
	let slides = this.slideDeck.getSlides();
	let slide = slides[this.slideDeck.getActiveSlide()];
	this.slideDeck.activateSlide(slide);

	window.setInterval(function() {
		_this.slideDeck.incrementCurrentSlide();
		_this.slideDeck.deactivateSlide(slide);
		slide = slides[_this.slideDeck.getActiveSlide()];
		_this.slideDeck.activateSlide(slide);
	}, 2000);
};

export function startCarousel() {
	let carousel = new Carousel();
	carousel.rotateSlides();
}

