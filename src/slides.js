export class Slides {
	constructor() {
		this.activeSlideIndex = 0;
	}

	getActiveSlide() {
		return this.activeSlideIndex;
	}

	setActiveSlide(index) {
		this.activeSlideIndex = index;
	}

	getSlides() {
		const containerId = 'simple-carousel';
		let carousel = document.getElementById(containerId);
		let slides = carousel.getElementsByClassName('slide');
		return slides;
	}

	incrementCurrentSlide() {
		let startIndex = 0;
		let slideIndex = this.getActiveSlide();
		if ((slideIndex + 1) < this.getSlides().length) {
			this.setActiveSlide(slideIndex + 1);
		} else {
			this.setActiveSlide(startIndex);
		}
	}

	deactivateSlide(slide) {
		slide.classList.remove('active');
	}

	activateSlide(slide) {
		slide.classList.add('active');
	}
}

