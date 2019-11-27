// Name: Slides
// Description: The Slides class produces an object representing a collection
// of slides. In each collection of slides, one slide is active, and that
// can be updated when the slides are incremented.
class Slides {
	constructor() {
		this.activeSlideIndex = 0;
	}

	getActiveSlideIndex() {
		return this.activeSlideIndex;
	}

	setActiveSlideIndex(index) {
		this.activeSlideIndex = index;
	}

	getSlides() {
		const containerId = 'simple-carousel';
		let container = document.getElementById(containerId);
		let slides = container.getElementsByClassName('slide');
		return slides;
	}

	incrementCurrentSlide() {
		let startIndex = 0;
		let slideIndex = this.getActiveSlideIndex();
		if ((slideIndex + 1) < this.getSlides().length) {
			this.setActiveSlideIndex(slideIndex + 1);
		} else {
			this.setActiveSlideIndex(startIndex);
		}
	}

	deactivateSlide(slide) {
		slide.classList.remove('active');
	}

	activateSlide(slide) {
		slide.classList.add('active');
	}
}

module.exports = Slides;
