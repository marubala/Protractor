/**
 * 
 */

var Excel = require('exceljs');

function readDataFromExcel()
{

	var wb = new Excel.Workbook();
	wb.xlsx.readFile('C:\\Bala\\Protractor\\ProTracJenkinsInte\\ProtractorPractice\\TestData.xlsx').then(function(){
    	var worksheet = wb.getWorksheet('Protractor');
    	//get value from a cell
    	var value = worksheet.getRow(2).getCell(2).value;
    	console.log(value);
    	//get row count
    	console.log(worksheet.rowCount);
    	
    	//get col count
    	console.log(worksheet.columnCount);

    })
}


readDataFromExcel();
