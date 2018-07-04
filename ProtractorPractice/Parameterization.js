
//Testing.js is nothing but spec.js file
var cmnLib = require('./CommonFunction.js');
var using = require('jasmine-data-provider');
var testData = require('./JasmineDataProvider.js')

describe('MyTestSuite', function(){

	beforeEach(function() {
		cmnLib.getURL();
		
	    });
	
			//browser.waitForAngularEnabled(false); //this is to turn off wait time to find angular elements. by default it is true
		
//Parameterization syntax. Out "it" block should be inside of using block, then only script will iterate for all data set
	//all the data sets are stored in "data" parameter
	
using(testData.DataDrive, function(data,description){
	

	//second Test Case
	it("Parameterize"+description,function(){
		
		var output;
		cmnLib.firstInput.sendKeys(data.firstValue);
		cmnLib.secondInput.sendKeys(data.secondValue);
		element(by.model('operator')).click().then(function(){
			browser.sleep(3000);
		})
		
		cmnLib.goButton.click();
		//cmnLib.Add(2,3);
		element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			console.log(text);
			if(text==data.result)
			{
			console.log("Pass");
			}
		else
			{
			console.log("Fail");
			}
		})
		
		
		//console.log(text);
		//browser.sleep(5000); //wait
		
		//Jasmine Assertions - It takes care resolving all the promise resolving
		
		//https://jasmine.github.io/2.0/introduction
		
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe(data.result);
		expect(element(by.css("h2[class='ng-binding']")).getText()).not.toBe("9");
		var a =10;
		expect(a).toEqual(10);
		var b ="hello";
		expect(b).toMatch("he");
		
	})	
})
	
	it("The 'toBeTruthy' matcher is for boolean casting testing", function() {
	    var a, foo = "foo";

	    expect(foo).toBeTruthy();
	    expect(a).not.toBeTruthy();
	  });

	  it("The 'toBeFalsy' matcher is for boolean casting testing", function() {
	    var a, foo = "foo";

	    expect(a).toBeFalsy();
	    expect(foo).not.toBeFalsy();
	  });
	  
	  
	  afterEach(function() {
			console.log("The test is completed");
			
		    });
	
	
})
