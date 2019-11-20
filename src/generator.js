let currentSlide;

let getSlides = function() {
	const containerId = 'simple-carousel';
	let carousel = document.getElementById(containerId);
	let slides = carousel.getElementsByClassName('slide');
	return slides;
};

let getActiveSlides = function() {
	const containerId = 'simple-carousel';
	let carousel = document.getElementById(containerId);
	let activeSlides = carousel.getElementsByClassName('active');
	return activeSlides;
};

let setCurrentSlide = function(index) {
	currentSlide = index;
};

let getCurrentSlide = function() {
	let i, e, slide;
	let slides = getSlides();

	if (!currentSlide && currentSlide !== 0) {
		for (i = 0, e = slides.length; i < e; i += 1) {
			slide = slides[i];
			if (slide.classList.contains('active')) {
				setCurrentSlide(i);
			}
		}
	}

	return currentSlide;
};

let incrementCurrentSlide = function() {
	let slideIndex = getCurrentSlide();
	if ((slideIndex + 1) < getSlides().length) {
		setCurrentSlide(slideIndex + 1);
	} else {
		setCurrentSlide(0);
	}
};

let deactivateSlides = function() {
	let i, e, slide;
	let activeSlides = getActiveSlides();

	for (i = 0, e = activeSlides.length; i < e; i += 1) {
		slide = activeSlides[i];
		slide.classList.remove('active');
	}
};

let activateSlide = function(slide) {
	slide.classList.add('active');
};

let rotateSlides = function() {
	let slides = getSlides();

	window.setInterval(function() {
		incrementCurrentSlide();
		deactivateSlides();
		let slide = slides[getCurrentSlide()];
		activateSlide(slide);
	}, 2000);
};

export function addCarousel() {
	rotateSlides();
}

