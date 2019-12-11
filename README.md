# simple-carousel
Simple Carousel Image Slider

## simple-carousel Options:

* slide-interval - specifies the slide rotation interval in milliseconds. e.g. `slide-interval="5000"`. Default is 10000ms.

## Instructions:

1. Clone repo - git clone https://github.com/boikle/simple-carousel.git
2. Install dependencies - npm install
3. Build the library - npm run build
4. Copy the simple-carousel.js file (generated in the dist directory) to your project.
5. Add the structure of the carousel to your webpage.

### Example:

```html
<!doctype html>
<html>
	<head>
		<title>Simple Carousel</title>
	</head>
	<body>
		<div id="simple-carousel" slide-interval="8000">
			<div class="slide" style="background-image:url(./slide1.jpg);">
				<div class="label">Slide 1 - This is the first slide.</div>
			</div>
			<div class="slide" style="background-image:url(./slide2.jpg);">
				<div class="label">Slide 2 - This is the second slide.</div>
			</div>
			<div class="slide" style="background-image:url(./slide3.jpg);">
				<div class="label">Slide 3 - This is the third slide.</div>
			</div>
		</div>
		<script src="./simple-carousel.js"></script>
	</body>
</html>
```
