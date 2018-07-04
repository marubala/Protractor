
describe('Demo Project POC', function(){
	
browser.driver.manage().window().maximize();
var EC = protractor.ExpectedConditions;

function selectPhone(phoneName){
	
	
	element.all(by.tagName("app-card")).each(function(allcards){
		
		allcards.element(by.css("h4 a")).getText().then(function(title){
			
			if(title==phoneName)
				{
				allcards.element(by.css("button[class='btn btn-info']")).click();
				}
			
		})
	})
	
}

it('Submit a Form', function(){
	
	browser.get("https://qaclickacademy.github.io/protocommerce/");
	
	
	element(by.name("name")).click();
	element(by.name("email")).click();
	element(by.name("name")).click();
	
	//validate Error messages displayed
	element.all(by.css("div[class='alert alert-danger']")).each(function(alertmsg){
		
		alertmsg.getText().then(function(alttext){
			console.log(alttext)
		})
		
	})
	
	element(by.name("name")).sendKeys("Bala");
	element(by.name("email")).sendKeys("marubala@gmail.com");
	element(by.id("exampleInputPassword1")).sendKeys("Veri1234");
	element(by.id("exampleCheck1")).click();
	
	element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();
	
	element(by.id("inlineRadio2")).click();
	
	expect(element(by.id("inlineRadio3")).isEnabled()).toBeFalsy();
	
	//Date Selection
	var today = new Date();
	var dd = today.getDate()+6;
	var mm = today.getMonth()+2; //January is 0!
	var yyyy = today.getFullYear()-5;
	
	expDate = mm+'/'+dd+'/'+yyyy;
	
	element(by.name("bday")).sendKeys(expDate);
	
	browser.sleep(3000);
	
	element(by.buttonText("Submit")).click();
	
	browser.sleep(2000);
	
	element.all(by.css("div[class='alert alert-success alert-dismissible']")).getText().then(function(successText){
		
	
			console.log(successText)
		})
		
	})
	
	//shop
	it('Shop', function(){
		
		element(by.css("a[href*='shop']")).click();
		
		selectPhone("Blackberry");
		element(by.partialLinkText("Checkout")).click();
		browser.sleep(5000);
		element(by.buttonText("Checkout")).click();
		
		browser.actions().mouseMove(element(by.id("country")).sendKeys("United")).perform();
		browser.sleep(8000);
		//element(by.css("div[div='suggestions'] ul[1]")).click();
		//browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		//browser.actions().sendKeys(protractor.Key.ENTER).perform();
		element(by.css("input[id='checkbox2']")).click();
		browser.sleep(4000);
		element(by.css("input[value='Purchase']")).click();
		element(by.css("[class*='success']")).getText().then(function(text){
			console.log(text);
		})
		
		
	})
	
	
})