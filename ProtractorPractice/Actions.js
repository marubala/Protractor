jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

//http://www.protractortest.org/#/api?view=webdriver.WebDriver.prototype.actions

describe('Learn Actions', function(){
	
	//Maximize the browser window
	browser.driver.manage().window().maximize();
	var EC = protractor.ExpectedConditions;
	
	 var originalTimeout;
	    beforeEach(function() {
	      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
	      jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
	    });
	it("Launch Posse website", function(){
		

		
		browser.get("https://posse.com").then(function(){
			browser.sleep(2000);
		})
			
	})
	
	it('Enter Value and hit search', function(){
		
		element(by.model("userInputQuery")).sendKeys("hotel");
		
		var ele = element(by.model("locationQuery"));
		browser.actions().mouseMove(ele.sendKeys("london")).perform();
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform();
		
		browser.getTitle().then(function(title){
			
			browser.sleep(5000);
			expect(title).toMatch("Posse");
			
			
		})
	})
	
	it('Validate Search results count', function(){
		
		//regular expression
		expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(13);
		element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(2).click();
		element(by.css("a[ng-href='/place/id/33085']")).click()
		browser.sleep(5000)
			
	})
	
	// SwitchTo Windows 
	
	it('switch to window', function(){
		
		browser.getTitle().then(function(title){
			console.log("The title before switching window: "+title);
		})
		
		browser.getAllWindowHandles().then(function(windows){
			browser.switchTo().window(windows[1]);
			browser.getTitle().then(function(title){
				console.log("The title after switching window: "+title);
			})
			browser.switchTo().window(windows[0]);
		})
		
	})
	
	
	// SwitchTo Alert 
	
	it('switch to Alert', function(){
		
		browser.waitForAngularEnabled(false);// the reason for this step is, the below website is non ANGULAR application
		browser.get("http://www.qaclickacademy.com/practice.php",30000);
		element(by.id("confirmbtn")).click();
		//Switch to alert and click OK button
		browser.sleep(4000)
		browser.switchTo().alert().accept();
		
		element(by.id("confirmbtn")).click();
		browser.sleep(4000)
		var alertmsg = browser.switchTo().alert().getText();
		console.log(alertmsg)
		
		//Switch to alert and click Cancel button button
		browser.switchTo().alert().dismiss();
		
	})
	
	
	// SwitchTo Frame 
	
	/*
	 * Frame means, in some websites, developer bring the complete home page and embed in a webpage as a frame. To click element inside that frame, we need to use switch frames. If the parent tag of object is frame, then use below concept
	 */
	
	it('switch to Frame', function(){
		
		browser.waitForAngularEnabled(false);// the reason for this step is, the below website is non ANGULAR application
		browser.get("http://www.qaclickacademy.com/practice.php");	
		
		browser.switchTo().frame("courses-iframe");
		element(by.css("a[href*='mailto']")).getText().then(function(email){
			console.log("The email Address is "+email)
		})
		
	})
	
	
// Synchronization
	
	/*
	 * Wait statement (explicit wait)
	 */
	
	it('Implement Sync wait', function(){
		
		browser.waitForAngularEnabled(false);// the reason for this step is, the below website is non ANGULAR application
		browser.get("http://www.itgeared.com/demo/1506-ajax-loading.html");	
		
		element(by.partialLinkText("load get data")).click();
		
		browser.wait(EC.visibilityOf(element(by.id("results"))),15000);
		
		element(by.id("results")).getText().then(function(data){
			console.log("The email Address is "+data)
		})
		
	})
	
	
})

