/**
 * 
 */
describe('Miscellanious functionalities', function(){
	
	
	browser.driver.manage().window().maximize();
	var EC = protractor.ExpectedConditions;
	
	it("isDisplayed", function(){
		
		browser.waitForAngularEnabled(false);// the reason for this step is, the below website is non ANGULAR application
		browser.get("http://www.qaclickacademy.com/practice.php",30000);
		
		expect(element(by.id("autocomplete")).isDisplayed()).toBeTruthy();
		
		
	})
	
	
	//we can validate whether element is exist or not
	it("isPresence", function(){
		
		expect(element(by.id("autocomplete12")).isPresent()).toBeFalsy();
		
	})
	
	
	it("checkRadioand Selected status", function(){
		
		expect(element(by.css("input[value='radio1']")).isSelected()).toBeFalsy();
		element(by.css("input[value='radio1']")).click();
		browser.sleep(5000);
		expect(element(by.css("input[value='radio1']")).isSelected()).toBeTruthy();
		
	})
	
	it("enabled or not", function(){
		
		expect(element(by.id("checkBoxOption1")).isEnabled()).toBeTruthy();
		element(by.id("checkBoxOption1")).click();
		browser.sleep(5000);
		expect(element(by.id("checkBoxOption1")).isSelected()).toBeTruthy();
		
	})
	
	//chain locator
	it("chain locator", function(){
		
		element(by.name("dropdown-class-example")).click();
		element(by.name("dropdown-class-example")).element(by.css("option[value='option2']")).click()
		expect(element(by.name("dropdown-class-example")).getText()).toMatch("Option2");
		
	})

	
	
})
