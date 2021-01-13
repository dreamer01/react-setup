const path = require('path');
const Dotenv = require('dotenv-webpack');

const config = require('./webpack.config.base');

config.mode = 'development';
config.devtool = 'eval-source-map';
config.plugins = [
  ...config.plugins,
  new Dotenv({
    path: path.resolve(__dirname, '../.env.dev'),
  }),
];

module.exports = config;
