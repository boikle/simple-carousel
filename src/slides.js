// Name: Slides
// Description: The Slides class generates an object representing a collection
// of slides and a corresponding slide index UI. In each collection of slides,
// one slide is active, and that can be updated when the slides are incremented.
const SlideIndex = require('./slide-index');

class Slides {
	constructor() {
		this.activeSlideIndex = 0;
		this.slides = this.getSlides();

		// Initialize first slide as active.
		this.slides[this.activeSlideIndex].classList.add('active');

		this.slideIndex = new SlideIndex();
		this.indexItems = this.slideIndex.getSlideIndexItems();
	}

	getActiveSlideIndex() {
		return this.activeSlideIndex;
	}

	setActiveSlideIndex(index) {
		if (index !== this.activeSlideIndex) {
			// Deactivate all active carousel elements
			this.deactivateActiveElements();

			// Update active slide index
			this.activeSlideIndex = index;
			let slide = this.slides[this.activeSlideIndex];
			let indexItem = this.indexItems[this.activeSlideIndex];
			this.activateSlide(slide);
			this.slideIndex.activateIndexItem(indexItem);
		}
	}

	getSlides() {
		const containerId = 'simple-carousel';
		let container = document.getElementById(containerId);
		let slides = container.getElementsByClassName('slide');
		return slides;
	}

	incrementCurrentSlide() {
		let slideIndex = 0;
		let currentIndex = this.getActiveSlideIndex();
		if ((Number(currentIndex) + 1) < this.getSlides().length) {
			slideIndex = Number(currentIndex) + 1;
		}

		let updateSlideEvent = new CustomEvent('updateActiveSlide', {
			detail: {
				'slideIndex': slideIndex
			}
		});
		document.dispatchEvent(updateSlideEvent);
	}

	deactivateActiveElements() {
		const containerId = 'simple-carousel';
		let container = document.getElementById(containerId);
		let activeElems = container.getElementsByClassName('active');

		while (activeElems.length) {
			activeElems[0].classList.remove('active');
		}
	}

	activateSlide(slide) {
		slide.classList.add('active');
	}
}

module.exports = Slides;
