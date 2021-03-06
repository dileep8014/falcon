// Karma configuration
// Generated on Wed Sep 24 2014 21:15:41 GMT-0500 (CDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'app/js/lib/angular.min.js',
      'app/js/lib/angular-cookies.min.js',
      'app/js/lib/angular-messages.min.js',
      'app/js/lib/angular-mocks.js',
      'app/js/lib/jquery-1.11.1.min.js',
      'app/js/lib/d3.min.js',
      'app/js/lib/ui-bootstrap-tpls-0.11.0.min.js',
      'app/js/lib/uirouter.min.js',
      'app/js/lib/xml2json.min.js',
      'app/js/controllers/**/*-module.js',
      'app/js/controllers/**/*.js',
      'app/js/services/**/*.js',
      'app/js/directives/**/*.js',
      'app/js/app.js',
      'app/test/**/*Spec.js'
    ],




    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
