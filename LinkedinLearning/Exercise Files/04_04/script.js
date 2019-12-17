function findBiggestFraction(a,b) {
    var result;
    a>b ? result = ['firstFraction', a] : result = ['secondFunction', b];
    return result;
}

var firstFraction = 3/4;
var secondFraction = 5/7;

var fractionResult = findBiggestFraction(firstFraction,secondFraction);
console.log("Fractipon " + fractionResult[0] + " with a value of of " + fractionResult[1] + " is the biggest")
