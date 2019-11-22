
let Carousel = function() {
	this.activeSlideIndex = 0;
}

Carousel.prototype.getActiveSlide = function() {
	return this.activeSlideIndex;
};

Carousel.prototype.setActiveSlide = function(index) {
	this.activeSlideIndex = index;
};

Carousel.prototype.getSlides = function() {
	const containerId = 'simple-carousel';
	let carousel = document.getElementById(containerId);
	let slides = carousel.getElementsByClassName('slide');
	return slides;
};

Carousel.prototype.incrementCurrentSlide = function() {
	let startIndex = 0;
	let slideIndex = this.getActiveSlide();
	if ((slideIndex + 1) < this.getSlides().length) {
		this.setActiveSlide(slideIndex + 1);
	} else {
		this.setActiveSlide(startIndex);
	}
};

Carousel.prototype.deactivateSlide = function(slide) {
	slide.classList.remove('active');
};

Carousel.prototype.activateSlide = function(slide) {
	slide.classList.add('active');
};

Carousel.prototype.rotateSlides = function() {
	let _this = this;
	let slides = this.getSlides();
	let slide = slides[this.getActiveSlide()];
	this.activateSlide(slide);

	window.setInterval(function() {
		_this.incrementCurrentSlide();
		_this.deactivateSlide(slide);
		slide = slides[_this.getActiveSlide()];
		_this.activateSlide(slide);
	}, 2000);
};

export function startCarousel() {
	let carousel = new Carousel();
	carousel.rotateSlides();
}

