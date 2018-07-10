/**
 * 
 */
var objCmnFunc = require('./CommonFunction.js');

describe('Testing Purpose', function(){
	
	//global variable print
	it('Print Global Variable', function(){
		
		console.log(browser.params.var1);
		
		//change global variable value
		browser.params.var1="hello World";
		console.log(browser.params.var1);
		
	})
	
	//property call
	it('Print from Common Function', function(){
		
		console.log(objCmnFunc.print);
	})
	
	//function call
	it('Print from Common Function', function(){
		
		objCmnFunc.functionCall("Where are you");
	})
	
	
	
	
})