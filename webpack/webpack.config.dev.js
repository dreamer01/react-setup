const config = require('./webpack.config.base');

config.mode = 'development';
config.devtool = 'eval-source-map';

module.exports = config;
