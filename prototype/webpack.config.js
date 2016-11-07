var HtmlWebpackPlugin = require('html-webpack-plugin');
var fs = require('fs-extra');

// Remove existing build directory
if (process.env.BUILD) {
  fs.removeSync('./dist');
}

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
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Template listing',
      template: './src/assets/_wrapper.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'homepage.html',
      title: 'Homepage',
      template: './src/assets/_wrapper.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'single.html',
      title: 'Single Page',
      template: './src/assets/_wrapper.html'
    })
  ]
};

module.exports = webpackConfig;
