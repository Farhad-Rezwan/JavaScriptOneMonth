const MYCONST = 5;
console.log(MYCONST);

function logScope(){
  var localVar = 2;
  console.log(localVar);

  if (localVar){
    let localVar = "i'm local var";
    console.log("nested localVar: ", localVar);
  }
  console.log("logScope localVar: ", localVar);
}
logScope()
