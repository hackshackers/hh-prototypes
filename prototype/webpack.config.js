var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpackConfig = {
  entry: [
		'./client/js/loader.js',
		'./client/sass/screen.scss'
	],
  output: {
    path: './dist',
		publicPath: "/assets/",
    filename: 'index_bundle.js'
  },
	module: {
		loaders: [
			{
				loader: "babel-loader",
				test: /\.js$/
			},
			{
				loaders: ["style", "css", "sass"],
				test: /\.scss$/
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin(), //generate index.html
		new HtmlWebpackPlugin({
			filename: 'test.html',
			template: 'src/assets/test.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'home.html',
			template: 'src/assets/home.html'
		})
	]
};

module.exports = webpackConfig;
