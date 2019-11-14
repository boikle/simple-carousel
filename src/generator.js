let getContainer = function() {
	const containerId = 'simple-carousel';
	let carousel = document.getElementById(containerId);
	carousel.textContent = "Simple Carousel";
};

export function addCarousel() {
	getContainer();
}

