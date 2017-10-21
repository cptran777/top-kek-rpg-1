const path = require('path');
const webpack = require('webpack');

const PATHS = {
  compiled: path.join(__dirname, 'client/public/scripts'),
  src: path.join(__dirname, 'client/src/main.js')
};

module.exports = {
  entry: [
    PATHS.src
  ],
  output: {
    path: PATHS.compiled,
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};