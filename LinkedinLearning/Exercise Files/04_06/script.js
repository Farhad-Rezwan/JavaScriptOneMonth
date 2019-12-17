var a = 7/9, b = 3/9;


var immediateInvoke = (function(a,b){
  var result;
  a > b? result = ["a", a] : result = ["b",b];
  return result;
})(a, b);


console.log(immediateInvoke);
