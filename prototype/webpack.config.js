var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpackConfig = {
  entry: [
    './client/js/loader.js',
    './client/sass/screen.scss'
  ],
  output: {
    path: './dist',
    publicPath: process.env.BUILD ? '' : '/assets/',
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/
      },
      {
        loaders: ['style', 'css', 'sass'],
        test: /\.scss$/
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(), //generate index.html
    new HtmlWebpackPlugin({
      filename: 'homepage.html',
      title: 'Homepage',
      template: './src/assets/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'single.html',
      title: 'Single Page',
      template: './src/assets/index.html'
    })
  ]
};

module.exports = webpackConfig;
