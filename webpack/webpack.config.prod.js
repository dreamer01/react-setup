const path = require('path');
const Dotenv = require('dotenv-webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const config = require('./webpack.config.base');

config.mode = 'production';
config.devtool = 'source-map';
config.plugins = [
  ...config.plugins,
  new Dotenv({
    path: path.resolve(__dirname, '../.env.prod'),
  }),
];

const addAddon = (addon) => {
  if (addon === 'bundleanalyze') {
    config.plugins = [
      ...config.plugins,
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: path.resolve(__dirname, '../dist/report.html'),
        openAnalyzer: false,
      }),
    ];
  }
  return config;
};

module.exports = ({ addon }) => (addon ? addAddon(addon) : config);
