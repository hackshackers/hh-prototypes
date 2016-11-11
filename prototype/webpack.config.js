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
    publicPath: '',
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
      {
        test: /\.png$/,
        loader: 'url',
        query: {
          limit: 10000,
          mimetype: 'image/png'
        }
      },
      {
        test: /\.jpg$/,
        loader: 'url',
        query: {
          limit: 10000,
          mimetype: 'image/jpg'
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Template listing',
      template: './src/_wrapper.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'homepage.html',
      title: 'Homepage',
      template: './src/_wrapper.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'single.html',
      title: 'Single Page',
      template: './src/_wrapper.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'styletile1.html',
      title: 'Style Tile',
      template: './src/_wrapper.html'
    })
  ]
};

module.exports = webpackConfig;
