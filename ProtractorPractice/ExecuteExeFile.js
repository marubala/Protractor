var exec = require('child_process').execFile;

var fun = function(){
   
   exec('C:\\Bala\\Protractor\\ProTracJenkinsInte\\ProtractorPractice\\UploadFile.exe', function(err, data) {  
        console.log(err)
        console.log(data.toString());                       
    });  
}
fun();