let BannerPlugin = require('webpack/lib/BannerPlugin');
let fs = require('fs');
const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'simple-carousel.min.js'
	},
	"module": {
		"rules": [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			}
		]
	},
	"plugins": [
		new BannerPlugin(fs.readFileSync('./LICENSE', 'utf8'))
	]

};
