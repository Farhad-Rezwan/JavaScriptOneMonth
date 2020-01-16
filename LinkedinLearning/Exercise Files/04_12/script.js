//clousers Functions inside a function, that relies on outer function to work
function giveMeEms2(pixels){
	var baseValue2 = 16;
	function doTheMath2 (){
		return pixels/baseValue2;
		
	}
	return doTheMath2;
}

var smallSize1 = giveMeEms2(12);
var mediumSize1 = giveMeEms2(15);
var largeSize1 = giveMeEms2(24);
var xLargeSize1 = giveMeEms2(32);

console.log("Small Size: ", smallSize1);
console.log("Medium Size: ", mediumSize1);
console.log("large Size: ", largeSize1());
console.log("xLarge Size: ", xLargeSize1());






























// function giveMeEms(pixels){
// 	var baseValue = 16;
//
// 	function doTheMath(){
// 		return pixels/baseValue;
// 	}
// 	return doTheMath;
// }
//
// var smallSize = giveMeEms(12);
// var mediumSize = giveMeEms(18);
// var largeSize = giveMeEms(24);
// var xLargeSize = giveMeEms(32);
//
//
// console.log("Small Size: ", smallSize());
// console.log("Medium Size: ", mediumSize());
// console.log("Large Size: ", largeSize());
// console.log("Extra Large Size: ", xLargeSize());





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
