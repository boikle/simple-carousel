// Name: SlideIndex
// Description: The SlideIndex class generates an object visually representing
// the index for the slide deck. It also provides a UI for navigating between
// the slides.
class SlideIndex {
	constructor() {
		this.deckSize = this.getDeckSize();
		this.createSlideIndex();
	}

	getDeckSize() {
		const containerId = 'simple-carousel';
		let container = document.getElementById(containerId);
		let slideIndex = container.getElementsByClassName('slide');

		return slideIndex.length;
	}

	createSlideIndex() {
		let i, indexItem;
		let el = document.getElementById('simple-carousel');
		let slideIndex = document.createElement('div');
		slideIndex.classList.add('slide-index');

		for (i = 0; i < this.deckSize; i += 1) {
			indexItem = document.createElement('div');
			indexItem.classList.add('index-item');
			indexItem.setAttribute('index', i);
			indexItem.addEventListener('click', function() {
				let btnIndex = this.getAttribute('index');
				let event = new CustomEvent('updateActiveSlide', {
					detail: {
						'slideIndex': btnIndex
					}
				});
				document.dispatchEvent(event);
			});
			slideIndex.appendChild(indexItem);

			if (i === 0) {
				indexItem.classList.add('active');
			}
		}

		el.appendChild(slideIndex);
	}

	getSlideIndexItems() {
		const containerId = 'simple-carousel';
		let container = document.getElementById(containerId);
		let slideIndex = container.getElementsByClassName('index-item');
		return slideIndex;
	}

	activateIndexItem(indexItem) {
		indexItem.classList.add('active');
	}
}

module.exports = SlideIndex;
