// 1. Search SoundCloud







//2. query sound SoundCloud using API

// //deskcription of switch (expression) {
//   case expression:
//
//     break;
//   default:
//
// }
var SoundCloudAPI = {

};
SoundCloudAPI.init = function () {
  SC.initialize({ // Why SC is not CamleCase, kind of convention
    client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
  });
}

SoundCloudAPI.init();
SoundCloudAPI.getTrack = function (inputValue){
  // find all sounds of buskers licensed under 'creative commons share alike'
  SC.get('/tracks', {
    q: inputValue//, license: 'cc-by-sa'
  }).then(function(tracks) {
    console.log(tracks);
    SoundCloudAPI.renderTracks(tracks);
  });
}
SoundCloudAPI.getTrack();

SoundCloudAPI.renderTracks = function(tracks){
  tracks.forEach(function(track){
    //card
    var card = document.createElement('div');
    card.classList.add('card');

    //image
    var image = document.createElement('div');
    image.classList.add('image');
    card.appendChild(image);

    var image_img = document.createElement('img');
    image_img.classList.add('image_img');
    image_img.src = track.artwork_url || 'http://lorempixel/100/100/abstract';
    image.appendChild(image_img);

    //content
    var content = document.createElement('div');
    content.classList.add('content');
    card.appendChild(content);

    var header = document.createElement('div');
    header.innerHTML = '<a href="https://soundcloud.com/barsuk-records/rilo-kiley-science-vs-romance" target="_blank">"Science Vs. Romance"</a>'
    content.appendChild(header);

    //button
    var button = document.createElement('div');
    button.classList.add('ui', 'bottom', 'attached', 'button', 'js-button');
    card.appendChild(button)

    var addIcon = document.createElement('i');
    addIcon.classList.add('add', 'icon');
    button.appendChild(addIcon);

    var span = document.createElement('span');
    span.innerHTML = 'Add to playlist'
    button.appendChild(span);


    var searchQuery = document.querySelector('.js-search-results');
    searchQuery.appendChild(card);  });



}




// <div class="card">
//     <div class="image">
//         <img class="image_img" src="http://www.placekitten.com/290/290">
//     </div>
//     <div class="content">
//         <div class="header">
//         <a href="https://soundcloud.com/barsuk-records/rilo-kiley-science-vs-romance" target="_blank">"Science Vs. Romance"</a>
//         </div>
//     </div>
//     <div class="ui bottom attached button js-button">
//         <i class="add icon"></i>
//         <span>Add to playlist</span>
//     </div>
// </div>










// SoundCloudAPI.renderTracks = function () {
//
//   //card
//   var card = document.createElement('div');
//   card.classList.add("cardIology");
//
//   //image
//   var imageDiv = document.createElement('div');
//   imageDiv.classList.add("imageIology");
//
//   var image_imgSec = document.createElement('img');
//   image_imgSec.classList.add("image_img")
//   image_imgSec.src = "http://www.placekitten.com/290/290";
//
//   imageDiv.appendChild(image_imgSec);
//
//   //content
//   var containerDiv = document.createElement('div');
//   containerDiv.classList.add("contentIology")
//
//   var headerDiv = document.createElement('div');
//   headerDiv.classList.add("headerIology");
//   headerDiv.innerHtml = '<a href="#" target="_blank">Science vs Romance</a>';
//
//   var headerDivA = document.createElement('a');
//   headerDivA.href = "https://soundcloud.com/barsuk-records/rilo-kiley-science-vs-romance";
//   headerDivA.target = "_blank";
//   // headerDivA.innerHtml("Science Vs. Romance")
//
//   var buttonDiv = document.createElement('div');
//   buttonDiv.classList.add("ui");
//   buttonDiv.classList.add("bottom");
//   buttonDiv.classList.add("attached");
//   buttonDiv.classList.add("buttonXyz");
//   buttonDiv.classList.add("js-button");
//
//   var buttonDivI = document.createElement('i');
//   buttonDivI.classList.add("add");
//   buttonDivI.classList.add("icon");
//
//   var buttonDivSpan = document.createElement('span');
//
//
//
//
//   var search = document.querySelector(".js-search-results");
//   search.appendChild(card);
//   var query = document.querySelector(".cardIology");
//   query.appendChild(imageDiv);
//   // var search2 = document.querySelector(".imageIology");
//   // search2.appendChild(image_imgSec);
//   var query2 = document.querySelector(".cardIology");
//   query2.appendChild(containerDiv);
//   // var search3 = document.querySelector(".contentIology");
//   // search3.appendChild(headerDiv);
//   var query3 = document.querySelector(".headerIology");
//   query3.appendChild(headerDivA)
//   query2.appendChild(buttonDiv)
//
//   var search4 = document.querySelector(".buttonXyz");
//   search4.appendChild(buttonDivI);
//   search4.appendChild(buttonDivSpan);
//
//
// }


//3. Display the cards








//4. Add to playlist to play
