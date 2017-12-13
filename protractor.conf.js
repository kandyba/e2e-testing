const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  SELENIUM_PROMISE_MANAGER: false,
  directConnect: true,
  baseUrl: 'http://www.protractortest.org',
  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    silent: true,
    defaultTimeoutInterval: 360000,
    print: function () {
    }
  },
  specs: [
    './specs/**/*.e2e.js'
  ],
  onPrepare: async() => {
    await jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      },
      summary: {
        displayDuration: false
      }
    }));
  }
};
