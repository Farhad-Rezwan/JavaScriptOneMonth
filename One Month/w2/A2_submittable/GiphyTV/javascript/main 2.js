var xhr = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=RusXB2nfPYt8Hn0EGHYh1CzFHB5vh7wq&limit=30";
var GiphyAJAXCall = new XMLHttpRequest();
var mainURLS = [];
var src;



GiphyAJAXCall.open( 'GET', xhr );
GiphyAJAXCall.send();
GiphyAJAXCall.addEventListener('load',function(e){
  var data = e.target.response;
  pushToDom(data);
 });


// how can i use promise here?

async function pushToDom(input){
  var response = await JSON.parse(input);
  var imageURLs = await response.data;
  var container = await document.getElementById("container");
  var i;
  for(i = 0; i<imageURLs.length; i++){
    await mainURLS.push(imageURLs[i].images.fixed_height.url);
    console.log(mainURLS[i]);
  }
  var j = 0;
  setTimeout(function(){
    console.log(mainURLS[j]);
    container.innerHTML = "<img src=" + mainURLS[j] + ">";
    j++;
  }, 3000*j);
}
