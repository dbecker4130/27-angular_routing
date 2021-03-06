'use strict';

const webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

module.exports = function(config) {
  config.set({
    webpack: webpackConfig,
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/**/*-test.js',
      'app/entry.js',
      'node_modules/angular-mocks/angular-mocks.js'

    ],
    exclude: [
    ],
    preprocessors: {
      'test/**/*-test.js': ['webpack'],
      'app/entry.js': ['webpack'],
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  });
};
