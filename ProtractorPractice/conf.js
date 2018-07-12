var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
		
  framework: 'jasmine',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  
  //Protractor starts the server automatically but this work only with chrome. If protractor starts the server automatically, then script will not run in Firefox and IE
  //specs: ['Testing.js','Locators.js'],
  specs: ['Testing.js'],
	//whatever inside onPrepare function, those are all applicable for all the specs
  onPrepare: function(){
		
		browser.driver.manage().window().maximize();
		
		jasmine.getEnv().addReporter(
				new Jasmine2HtmlReporter({
					savePath: 'Reports',
					screenshotsFolder: 'Screenshots',
					takeScreenshotsOnlyOnFailures: true,
					fileNameDateSuffix: true,
					showPassed: true,
					cleanDestination: true
					})
				);
	},
	
	jasmineNodeOpts:{
		showColors: true
	},
	//if you want to run only few specific test cases
	//To run only below specs -  protractor": "./node_modules/.bin/protractor conf.js --suite Smoke" so command is npm run protractor
	
	/*suites:
		{
		Smoke: ['Testing.js','Locators.js']
		},
	*/
	params: {
	    var1: 'Global Variable',
	    var2: 'How are you'
	    
	}
 // capabilities: {
	  //'browserName': 'firefox'
	  //To download IE driver file  use webdriver-manager update --ie and then run in IE
	  //'browserName': 'firefox'
	  //zoom level is set to some percentage- make it 100% error: launch IE view--->zoom -->100%
	 // 'browserName': 'internet explorer'
	
	
	// to accept unsecured SSL certs, we have use below configuration
	//acceptUnsecuredCerts: true
		  
	//}

//run the script on multi browser
/*multiCapabilities: [{
    browserName: 'firefox'
  }, 
  {
    browserName: 'chrome'
  }]*/

	

};


/* REFERENECES:

1. http://juliemr.github.io/protractor-demo/ (ANGULAR Application)
2. https://jasmine.github.io/2.0/introduction (JASMINE Assertions)
3. http://www.protractortest.org/#/
4. http://www.qaclickacademy.com/practice.php   (NON ANGULAR Application)
5. http://posse.com
6. http://www.itgeared.com/demo/1506-ajax-loading.html
7. https://qaclickacademy.github.io/protocommerce/


TO GENERATE package.json file, please execute the command 'npm init -f' from your project location

TO intsall all the packages from package.json, go to directory where you have package.json, run command 'npm install'

cmd to trigger test cases from package.json
npm run protractor  ---------- (scriptname)


"@types/node": "^6.0.46",
	   	"@types/q": "^0.0.32",
	    "@types/selenium-webdriver": "~2.53.39",
	    "blocking-proxy": "^1.0.0",
	    "chalk": "^1.1.3",
	    "glob": "^7.0.3",
	    "jasmine": "2.8.0",
	    "jasminewd2": "^2.1.0",
	    "optimist": "~0.6.0",
	    "q": "1.4.1",
	    "saucelabs": "^1.5.0",
	    "selenium-webdriver": "3.6.0",
	    "source-map-support": "~0.4.0",
	    "webdriver-js-extender": "^1.0.0",
	    "webdriver-manager": "^12.0.6"
	    


TO RUN TEST HEADLESS


//CHROME
capabilities: {
  browserName: 'chrome',

  chromeOptions: {
     args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
   }
}

//FIREFOX
capabilities: {
  browserName: 'firefox',

  'moz:firefoxOptions': {
     args: [ "--headless" ]
   }
}

*/