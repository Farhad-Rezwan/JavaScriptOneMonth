// var a = 4/5, b = 5/6;

var whichBigger = function(a, b){
  var result;
  a > b? result = ["a", a] : result = ["b", b];
  return result;
}
console.log(whichBigger(10/100, 100/10));
