const path = require('path');


const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    //publicPath: path.resolve('img'),
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/,  loader: 'babel-loader', exclude: /node_modules/, query : { presets: ['es2015','stage-0','react']}},
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/, query : { presets: ['es2015','stage-0','react']}},
     /* { test: /\.css$/, use: ['style-loader', 'css-loader'] },*/
    ],
  },
  plugins: [HtmlWebpackPluginConfig],
};
