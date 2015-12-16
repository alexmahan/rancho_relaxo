
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    js: './app/js/site.js'
  },

  resolve: {
    root: __dirname
  },

  output: {
    path: __dirname + '/public',
    filename: 'js/site.js'
  },

  node: {
    fs: 'empty'
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'css?sourceMap!' +
          'sass?sourceMap'
        ),
        exclude: /node_modules|dist/
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules|public|app\/vendor|dist/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('css/site.css')
  ]
};