var xhr = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=RusXB2nfPYt8Hn0EGHYh1CzFHB5vh7wq&limit=30";
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', xhr );
GiphyAJAXCall.send();
GiphyAJAXCall.addEventListener('load',function(e){
  var data = e.target.response;
  pushToDom(data);
 });


var mainURLS = [];
var src;

function pushToDom(input){
  var response = JSON.parse(input);
  var imageURLs = response.data;
  var container = document.getElementById("container");
  var i;
console.log(imageURLs)
  for(i = 0; i<imageURLs.length; i++){
    mainURLS.push(imageURLs[i].images.fixed_height.url);
  }
var j;
console.log(mainURLS);
  for(j = 0; j<mainURLS.length; j++){
    src = mainURLS[j];

    setTimeout(function(){
        // console.log(mainURLS[j]);
        // console.log(src)
        container.innerHTML = "<img src=" + src + ">";
    }, 500*j);
  }

}

// var x;
// for(x = 0; x<20; x++){
//   setTimeout(function(){
//     var box = document.createElement('div');
//     box.className = 'box';
//     document.getElementById('container');
//     // document.getElementById("container").appendChild("box");  DOES NOT WORK!!!
//
//   }, 500*x);
//
// }
