const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); 
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: 'index.js',
    path: __dirname + './dist',
  },
  module: {
    rules: [{ test: /\.js$/, use: 'raw-loader' }],

  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.js' })],
};