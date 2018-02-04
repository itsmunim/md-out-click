const path = require('path');
const webpack = require('webpack');
const absolutePath = (relativePath) => { return path.resolve(__dirname, relativePath); }

module.exports = {
  entry: {
    'md.out.click': absolutePath('src/index.js'),
    'md.out.click.min': absolutePath('src/index.js')
  },
  devtool: 'source-map',
  output: {
    path: absolutePath('dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
};
