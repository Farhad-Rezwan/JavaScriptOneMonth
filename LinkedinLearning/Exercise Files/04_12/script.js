function giveMeEms(pixels){
	var baseValue = 16;

	function doTheMath(){
		return pixels/baseValue;
	}
	return doTheMath;
}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xLargeSize = giveMeEms(32);


console.log("Small Size: ", smallSize());
console.log("Medium Size: ", mediumSize());
console.log("Large Size: ", largeSize());
console.log("Extra Large Size: ", xLargeSize());





// function doSomeMath() {
// 	var a = 5;
// 	var b = 4;
// 	function multiplication() {
// 		var results = a * b;
// 		return results;
// 	}
// 	return multiplication;
// }
//
// var theResult = doSomeMath();
//
// console.log("The result: ", theResult());
