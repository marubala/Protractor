function CommonFunction(){
	
	
    this.print = "How are you man";
    
    //objects
    this.firstInput = element(by.model('first'));
    this.secondInput = element(by.model('second'));
    this.goButton = element(by.id('gobutton'));
    
    this.functionCall = function(text){
    	console.log(text);
    }
    
    this.getURL = function(){
    	browser.driver.manage().window().maximize();
    	browser.get('https://juliemr.github.io/protractor-demo/').then(function(){
			browser.sleep(2000);
    	})
    }
};

module.exports = new CommonFunction();