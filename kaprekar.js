//	Kaprekar's contant
//	
//	6174 is known as Kaprekar's constant.
//	1. Take any four-digit number, using at least two different digits. (Leading zeros are allowed.)
// 	2. Arrange the digits in descending and then in ascending order to get two four-digit numbers, adding leading zeros if necessary.
// 	3. Subtract the smaller number from the bigger number.
// 	4. Go back to step 2 and repeat.
//  The above process, known as Kaprekar's routine, will always reach its fixed point, 6174
// 
//	Output:
// 
//	Number: 5148
//	8541 - 1458 = 7083
//	8730 - 0378 = 8352
//	8532 - 2358 = 6174
//

var constant = 6174;
var number = 5148;

// type = type of sort
function sortNum(num, type) {
	var digits = (""+num).split("");
	if(type == "normal"){
		digits.sort(function(a, b){return a-b});;
	}
	else if(type == "inverse"){
		digits.sort(function(a, b){return b-a});;
	}
	return digits.join('');
}

function Kapr(num) {

	while(num !== constant ){
		var min = sortNum(num, "normal"); 
		var max = sortNum(num, "inverse"); 
		
		console.log(max, "-", min, "=", max-min); 
		num = max-min;
	}
	
}
console.log("Number:", number); 
Kapr(number);