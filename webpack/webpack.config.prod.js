const path = require('path');
const Dotenv = require('dotenv-webpack');

const config = require('./webpack.config.base');

config.mode = 'production';
config.devtool = 'source-map';
config.plugins = [
  ...config.plugins,
  new Dotenv({
    path: path.resolve(__dirname, '../.env.prod'),
  }),
];

module.exports = config;
