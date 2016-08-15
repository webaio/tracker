var customLaunchers = {
    'edge': {
        base: 'SauceLabs',
        browserName: 'MicrosoftEdge',
        platform: 'Windows 10',
        version: '13.10586'
    },
    'ie11': {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 7',
        version: '11'
    },
    'ie10': {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 7',
        version: '10'
    },
    'ie9': {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 7',
        version: '9'
    },
    'firefox-windows': {
        base: 'SauceLabs',
        browserName: 'Firefox',
        platform: 'Windows 7',
        version: '21'
    },
    'chrome-windows': {
        base: 'SauceLabs',
        browserName: 'Chrome',
        platform: 'Windows 7',
        version: '26'
    },
    'opera-windows': {
        base: 'SauceLabs',
        browserName: 'Opera',
        platform: 'Windows 7',
        version: '12.12'
    },
    'safari': {
        base: 'SauceLabs',
        browserName: 'Safari',
        platform: 'OS X 10.8',
        version: '6.0'
    },
    'safari-ios': {
        appiumVersion: '1.4.16',
        deviceName: 'iPhone Simulator',
        base: 'SauceLabs',
        browserName: 'Safari',
        platform: 'iOS',
        version: '7.0'
    }
};

module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'browserify'],

        preprocessors: {
            '.tmp/test/**/*.test.js': ['browserify']
        },

        reporters: ['mocha', 'saucelabs'],

        browserNoActivityTimeout: 500000,

        captureTimeout: 300000,

        browserDisconnectTolerance: 5,

        customLaunchers: customLaunchers,

        sauceLabs: {
            testName: 'weba.io tracker test'
        },

        logLevel: config.LOG_INFO,

        browsers: Object.keys(customLaunchers),

        singleRun: true

    });
};
