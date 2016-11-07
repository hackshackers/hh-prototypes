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
      filename: 'homepage.html',
      template: 'src/assets/homepage.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'single.html',
      template: 'src/assets/single.html'
    })
  ]
};

module.exports = webpackConfig;
