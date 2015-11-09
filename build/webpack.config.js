// Webpack config file
require('babel/register');
const Path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const jsBundle = require('../build/utils.js').getJsBundle();

module.exports = {
  entry: [
    './web/react/app.js',
  ],
  output: {
    path: Path.resolve(__dirname, '../web/static/js'),
    filename: jsBundle,
  },
  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loaders: [ 'style', 'css', 'sass?config=sassConfig' ],
      },
      // Configure loading font files
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff",
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff",
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream",
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file",
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml",
      },
    ],
  },
  sassConfig: {
    precision: 8,
  },
  plugins: [
    new BrowserSyncPlugin({
      proxy: 'localhost:8000',
    }),
  ],
};

