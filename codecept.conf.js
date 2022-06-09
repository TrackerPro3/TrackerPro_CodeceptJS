const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();
//let loginData = require('./testData/data.js');
//let loginLocators = require('./pages/user_login.js');

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
     url: 'https://azrtpqaw22.trackerpro.cc/Hotel/Authentication/Login.aspx',
      show: true,
      keepCookies: true,
      waitForNavigation: "domcontentloaded",
      getPageTimeout: 0,
      chrome: {
        args: ['--ignore-certificate-errors', '--window-size=1280,960']
       }, //windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js',
    user_loginPage: './pages/user_login.js',
    loginData: './testData/data.js'
  },
  bootstrap: null,
  mocha: {
    reporterOptions: {
      //mochaFile:"output/result.xml",
      overwrite: false, //Creates report with different name and doesn't overwrite existing
      reportDir: "output",
      reportFilename: '[status]_[datetime]-report',
      timestamp: "longDate"
      //timestamp: "true" //This gives the format along with time which helps in identifying the time or diferentiating from other report
    }
  },
  name: 'TrackerPro_CodeceptJS'
}