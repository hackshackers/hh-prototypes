var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: 'http://localhost:8080/dist/',
  hot: true,
  historyApiFallback: true,
  stats: {
    chunkModules: false,
    colors: true,
  },
}).listen(8080, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:8080/dist/index.html');
});
