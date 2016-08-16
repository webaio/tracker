var istanbul = require('browserify-istanbul');

module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'browserify'],

        preprocessors: {
            '.tmp/test/**/*.test.js': ['browserify'],
            '.tmp/src/**/*.js': ['browserify']
        },

        reporters: ['mocha', 'coverage', 'junit'],

        coverageReporter: {
            dir: 'coverage',
            reporters: [
                { type: 'lcov', subdir: '.' },
                { type: 'json', subdir: '.'}
            ],
            includeAllSources: true
        },

        junitReporter: {
            outputDir: 'coverage',
            outputFile: 'coverage.xml',
            useBrowserName: false
        },

        browserNoActivityTimeout: 500000,

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: false,

        browsers: ['PhantomJS'],

        singleRun: false,

        browserify: {
            debug: true,
            transform: [
                'brfs',
                'browserify-shim',
                istanbul({
                    defaultIgnore: true
                })
            ]
        }

    });
};
