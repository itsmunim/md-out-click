const webpack = require("webpack");

module.exports = {
  entry: {
    "out.click.directive": "./out.click.directive.js",
    "out.click.directive.min": "./out.click.directive.js"
  },
  devtool: "source-map",
  output: {
    path: "dist/",
    filename: "[name].js"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
};
