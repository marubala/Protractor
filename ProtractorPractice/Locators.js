describe('locators test case', function(){
	
	
	//Navigate to URL and validate Title
	
	it("Validate Title", function(){
		
		//browser.get("http://juliemr.github.io/protractor-demo/");
		browser.getTitle().then(function(title){
			
			expect(title).toContain("Super Calculator");
			
		})
		
	})
	
	//Add Number
it("Add Number", function(){
		
		//browser.get("http://juliemr.github.io/protractor-demo/");
		
		element(by.model("first")).sendKeys("5");
		element(by.model("second")).sendKeys("8");
		element(by.id('gobutton')).click();
		
			
		})
		
//Subtract Number
it("Subtract", function(){
		
		//browser.get("http://juliemr.github.io/protractor-demo/");
		
		element(by.model("first")).sendKeys("17");
		//chain locators
		element(by.model("operator")).element(by.css("option[value='SUBTRACTION']")).click();
		element(by.model("second")).sendKeys("11");
		//browser.sleep(5000)
		element(by.id('gobutton')).click();
		
			
		})


it("Division", function(){
		
		//browser.get("http://juliemr.github.io/protractor-demo/");
		
		element(by.model("first")).sendKeys("12");
		
		element(by.model("operator")).element(by.css("option[value='DIVISION']")).click();
		element(by.model("second")).sendKeys("3");
		//browser.sleep(5000)
		element(by.id('gobutton')).click();
		
			
		})
		
it("Multiplication", function(){
		
		//browser.get("http://juliemr.github.io/protractor-demo/");
		
		element(by.model("first")).sendKeys("7");
		
		element(by.model("operator")).element(by.css("option[value='MULTIPLICATION']")).click();
		element(by.model("second")).sendKeys("5");
		//browser.sleep(5000)
		element(by.id('gobutton')).click();
		
			
		})
		
		
it("Modulus", function(){
		
		//browser.get("http://juliemr.github.io/protractor-demo/");
		
		element(by.model("first")).sendKeys("7");
		
		element(by.model("operator")).element(by.css("option[value='MODULO']")).click();
		element(by.model("second")).sendKeys("5");
		
		element(by.id('gobutton')).click();
		
			
		})
		
//Use of repeaters
		
it("Repeaters", function(){
	
	//This is to capture row count from table
	element.all(by.repeater("result in memory")).count().then(function(count){
		console.log(count);
	})
	
	//this is to get column count
	element.all(by.repeater("result in memory")).first().all(by.css("td")).count().then(function(count){
		console.log("The column count is ".concat(count));
	})
	
		//if more than one element is identified, then protractor will use the first element for an operation
	element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
		console.log(text);
	})
	//This is to capture all the rows from 
	element.all(by.repeater("result in memory")).each(function(totalRows){
	
		totalRows.element(by.css("td:nth-child(3)")).getText().then(function(text){
			console.log(text);
		})
		
	})
	
	
	})
	
})



