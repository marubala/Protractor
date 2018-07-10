/**
 * 
 */

describe('get window handle scenario', function (){
	
	
	
	it('Switch window Handle', function(){
		
		browser.waitForAngularEnabled(false);
		browser.get("http://soltech.net/");
		
		var ele = element(by.cssContainingText("[class='menu-dropdown-icon'] a","Careers"));
		
		
		browser.actions().mouseMove(ele.click()).perform();
		element(by.css("a[href*='careers-soltech']")).click();
		
		browser.getAllWindowHandles().then(function(windows){
			browser.switchTo().window(windows[1]);
		})
		
		browser.sleep(5000);
		
		element.all(by.css("input[type='text']")).each(function(objects){
			
			objects.element(by.css("input:nth-child(0)")).sendKeys("Automation");
			
		})
		
		browser.sleep(5000);
		
		//element(by.css("input[type='submit']")).submit();
		
		var resultcount = element.all(by.css["li[class='row']"]);
		console.log(resultcount);
		
	})
	
	
	
	
	
})