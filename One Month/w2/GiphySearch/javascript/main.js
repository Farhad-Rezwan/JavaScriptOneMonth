// 1. Grab the input value

document.querySelector('.js-go').addEventListener('click', function(){
  var input  = document.querySelector('input').value;
  //console.log(input);
  generateLink(input);
});

document.querySelector('.js-userinput').addEventListener('keyup', function(e){
  //console.log(e)
  var input  = document.querySelector('input').value;
  // if the key ENTER is pressed ... then execute
  if (e.which === 13){
    generateLink(input);
  }

});
// // 2. to do the data stuff with the API

function generateLink(input){
  //console.log(input);
  // javascript, jQuery
  var wordsArray = input.split(" ");
  var wordsWithPlus = wordsArray.join("+");
  var xhr = "http://api.giphy.com/v1/gifs/search?q=" + wordsWithPlus + "&api_key=RusXB2nfPYt8Hn0EGHYh1CzFHB5vh7wq&limit=30";
  //console.log(xhr)
  var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open( 'GET', xhr );
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load',function(e){

      var data = e.target.response;
      var count = JSON.parse(data);

      var totalCount = count.data.length;
      if (totalCount != 0){
        pushToDom(data);
      } else {
        pushToDoms();
      }
    });

}
// 3. Show me the GIFs
function pushToDoms(){
  var container = document.querySelector(".js-container");
  container.innerHTML = "0 result found";
}
function pushToDom(input){

  var response = JSON.parse(input);
  var imageURLs = response.data;
  var container = document.querySelector(".js-container");
  container.innerHTML = "";
  //container.empty();
  //container.innerHTML = imageURLs;
  imageURLs.forEach(function(image){
    var src = image.images.fixed_height.url;
    container.innerHTML += "<img src=\""+ src +"\" class=\"container-image\">";
  });
}
