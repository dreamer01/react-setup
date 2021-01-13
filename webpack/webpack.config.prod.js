const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config.base');

config.mode = 'production';
config.devtool = 'source-map';
config.plugins = [...config.plugins];

module.exports = config;
