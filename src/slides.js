
export let Slides = function() {
	this.activeSlideIndex = 0;
};

Slides.prototype.getActiveSlide = function() {
	return this.activeSlideIndex;
};

Slides.prototype.setActiveSlide = function(index) {
	this.activeSlideIndex = index;
};

Slides.prototype.getSlides = function() {
	const containerId = 'simple-carousel';
	let carousel = document.getElementById(containerId);
	let slides = carousel.getElementsByClassName('slide');
	return slides;
};

Slides.prototype.incrementCurrentSlide = function() {
	let startIndex = 0;
	let slideIndex = this.getActiveSlide();
	if ((slideIndex + 1) < this.getSlides().length) {
		this.setActiveSlide(slideIndex + 1);
	} else {
		this.setActiveSlide(startIndex);
	}
};

Slides.prototype.deactivateSlide = function(slide) {
	slide.classList.remove('active');
};

Slides.prototype.activateSlide = function(slide) {
	slide.classList.add('active');
};

