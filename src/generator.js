let getSlides = function() {
	const containerId = 'simple-carousel';
	let carousel = document.getElementById(containerId);
	let slides = carousel.getElementsByClassName('slide');
	return slides;
};

let deactivateSlide = function(slide) {
	slide.classList.remove('active');
};

let activateSlide = function(slide) {
	slide.classList.add('active');
};

let rotateSlides = function() {

	let slides = getSlides();

	console.log(slides);
//	slides.forEach(function(slide) {
//		window.setTimeout(function() {
//			activateSlide(slide);
//		}, 5000);
//		deactivateSlide(slide);
//	});
};

export function addCarousel() {
	rotateSlides();
}

