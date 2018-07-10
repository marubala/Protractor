/**
 * 
 */

//Numbers

//isInteger

console.log(Number.isInteger(12));

console.log(Number.isInteger(12.3));


//parseInt

console.log(Number.parseInt("123"));

//creating an array

var veg = ['Beans','Tomato','Potato'];

console.log(veg.length);

veg.forEach(function(item, index, array) {
	  console.log(item, index);
})

//Add an item to end of an array

var newLength = veg.push('Onion');

veg.forEach(function(item, index, array) {
	  console.log(item, index);
})


//Remove an item from end of an array

var relast = veg.pop('Onion');

//remove an item from front of an array

var refirst = veg.shift('Beans');

veg.forEach(function(item, index, array) {
	  console.log(item, index);
})


var newLength = veg.unshift('Strawberry') // add to the front

var pos = veg.indexOf('Potato');//to get index of an array

var remov = veg.splice(pos,1); //to remove an item using index

veg.forEach(function(item, index, array) {
	  console.log(item, index);
})


//to copy an array

var copiedarray = veg.slice();


//find a substring in a string using indexOf

var str1 = "learning Java Script for Testing";

var pos = str1.indexOf("for");

console.log(pos);

if(pos!==-1)
	{
	console.log("Pass");
	}
else
	{
	console.log("Fail");
	}


//using reqEx
var reqex = /Script/;
var bln = reqex.test(str1);
if(bln)
	{
	console.log("Success");
	}
else
	{
	console.log("Failure");
	}


//using includes
var incl = "Java";
var bln1 = str1.includes(incl);
if(bln1)
	{
	console.log("Success");
	}
else
	{
	console.log("Failure");
	}



//sorting a string in alphabetical order

var str2 = "kjksahdskdiojfdyaedwqtf how are you man";

var array = str2.split(" ");

console.log(array.sort());


//Sort an array in Ascending order

var arr1 = [1, 300, 4, 120, 6, 230, 76, 43, 54, 87,94, 29];


arr1.sort(function(a,b){
	
	return a-b;
	
});

console.log(arr1);

//Sort an array in Descending order

var arr2 = [1, 300, 4, 120, 6, 230, 76, 43, 54, 87,94, 29];


arr2.sort(function(a,b){
	
	return b-a;
	
});

console.log(arr2);


//Remove duplicates from array and print unique values

var dup = [1,4,2,5,7,3,9,45,65,87,1,2,5,9,8];

dup.sort(function(a,b){
	
	return a-b;
	
});

const array1 = new Set(dup);

console.log(array1);


//Print only duplicate values

var dup1 = [1,4,2,5,7,3,9,45,65,87,1,2,5,9,8];

dup1.sort(function(a,b){
	
	return a-b;
	
});

var results = [];
for (var i = 0; i < dup1.length - 1; i++) {
    if (dup1[i + 1] == dup1[i]) {
        results.push(dup1[i]);
    }
}

console.log(results);

//find common elements between 2 arrays

var Balaarray1 = [1,5,7,3,8,5];
var Balaarray2 = [7,9,5,4,2,6,0];

Balaarray2.filter(value => 
		{
			if(-1 !== Balaarray1.indexOf(value))
				{
				console.log(value);
				}
		});


//Concatenate two arrays

var joinarr1 = ["hi", "bala", "hwrwe"];
var joinarr2 = [1,5,6,8,3,9];

var newarr1 = joinarr1.concat(joinarr2);

console.log(newarr1);


//Join all the array elements and output as string

var joinsasstr = ["fgar","shgsd", "hsgds"];

var afterjoinstr = joinsasstr.join(",");

console.log(afterjoinstr);








/* Java important concepts
 * 
 * Java is asyncronous langauage. So to execute all the statements sequencely we need promise or callback functions
 * Callback functions are nothing but high order function - We pass the function as an argument for another function. Once the calling function is executed, the called function gets executed - That is the reason why it is call back function
 * Both Promise and Callback functions does the same job. But if you use callback functions, the code looks messy. so better to go with Proise
 * then, each are possible promise methods
 * Arrow function ---> Arrow function will have shorther syntax /concise syntax. we can complete the code in one line
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
 

