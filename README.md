# simple-carousel
Simple Carousel Image Slider

## Instructions:

1. Clone repo - git clone https://github.com/boikle/simple-carousel.git
2. Install dependencies - npm install
3. Build the library - npm run build
4. Copy the simple-carousel.js file to your project.
5. Add the structure of the carousel to your webpage.

### Example:

```html
<!doctype html>
<html>
	<head>
		<title>Simple Carousel</title>
	</head>
	<body>
		<div id="simple-carousel">
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
