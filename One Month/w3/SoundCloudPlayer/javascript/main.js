// 1. Search SoundCloud
var UI = {
};
UI.handleEnt = function() {
	document.querySelector(".js-search").addEventListener('keypress', function(e) {
		if (e.which === 13) {
			var inputValue = e.target.value;
			SoundCloudAPI.getTrack(inputValue);
		}
	});

}

UI.handleClick = function(){
	document.querySelector('.js-submit').addEventListener('click', function(e) {
		var inputValue = document.querySelector(".js-search").value;
		SoundCloudAPI.getTrack(inputValue);
	});

}

UI.handleEnt();
UI.handleClick();



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
  SC.get('/tracks/', {
    q: inputValue//, license: 'cc-by-sa'
  }).then(function(tracks) {
    console.log(tracks);
    var search = document.querySelector('.js-search-results')
    search.innerHTML = "";
    SoundCloudAPI.renderTracks(tracks, search);
  });
}
SoundCloudAPI.getTrack();


//3. Display the cards


SoundCloudAPI.renderTracks = function(tracks, search){
  tracks.forEach(function(track){
    //card
    var card = document.createElement('div');
    card.classList.add('card');

    //image
    var image = document.createElement('div');
    image.classList.add('image');


    var image_img = document.createElement('img');
    image_img.classList.add('image_img');
    image_img.src = track.artwork_url || 'http://lorempixel.com/100/100/abstract/';

    image.appendChild(image_img);

    //content
    var content = document.createElement('div');
    content.classList.add('content');


    var header = document.createElement('div');
    header.classList.add('header');
    header.innerHTML = '<a href="' + track.permalink_url + '">' + track.title + '</a>'
    content.appendChild(header);

    search.appendChild(content);
    //button
    var button = document.createElement('div');
    button.setAttribute('data-id', track.id);
    button.classList.add('ui', 'bottom', 'attached', 'button', 'js-button');


    var addIcon = document.createElement('i');
    addIcon.classList.add('add', 'icon');

    var span = document.createElement('span');
    span.innerHTML = 'Add to Playlist'

    //content.appendChild(header);


    button.appendChild(addIcon);
    button.appendChild(span);

    button.addEventListener('click', function(){
      SoundCloudAPI.getEmbed(track.permalink_url);
    })

    card.appendChild(image);
    card.appendChild(content);
    card.appendChild(button);


    search.appendChild(card);



  });

}


SoundCloudAPI.getEmbed = function(trackURL){
  console.log('click i am in embed');
  SC.oEmbed(trackURL, {
    auto_play: true
  }).then(function(embed){
    console.log('oEmbed response: ', embed);

    var sidebar = document.querySelector('.col-left');
    // one after another
    var box = document.createElement('div');
    box.innerHTML = embed.html;


    sidebar.insertBefore(box, sidebar.firstChild);
    //local storage
    localStorage.setItem("key", sidebar.innerHTML);

    // Copied from solution
    var SCWdiget = SoundCloudAPI.getWidget( embed.childNodes[ 0 ] );

    // bind the finish event to init
    SCWdiget.bind('finish', function() {
      alert("FINISHED");
      // Playlist.next();

      // var nextEmbed = sidebar.childNodes[ Playlist.currentTrack ];
      // var nextWidget = SoundCloudAPI.getWidget( nextEmbed.childNodes[ 0 ] );

      // nextWidget.play();
    });
    SCWdiget.bind('play', function() {
      var widgetIndex = Array.from( sidebar.childNodes ).indexOf( embed );
          // OLDer JAVASCRIPT: [].slice.call( sidebar.childNodes ).indexOf( embed ).
      Playlist.currentTrack = widgetIndex;
    });
    //copied from solution





  });
}
SoundCloudAPI.getWidget = function(embedElement) {
	return SC.Widget(embedElement);
}

var sideBar1 = document.querySelector('.col-left');
sideBar1.innerHTML = localStorage.getItem('key');


//4. Add to playlist to play
