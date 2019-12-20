//1. Search SoundCloud
var UI = {
};

var nutritionixAPI = {
  //https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=dfe3ca21&appKey=4fd5070b6e65346a9b3407b87c933ee7

};
UI.handleEnt = function() {
	document.querySelector(".js-search").addEventListener('keypress', function(e) {
		if (e.which === 13) {
			var inputValue = e.target.value;
			nutritionixAPI.getInfo(inputValue);
		}
	});

}

UI.handleClick = function(){
	document.querySelector('.js-submit').addEventListener('click', function(e) {
		var inputValue = document.querySelector(".js-search").value;
		nutritionixAPI.getInfo(inputValue);
	});

}

UI.handleEnt();
UI.handleClick();









nutritionixAPI.getInfo = function (inputValue){
    var wordsArray = inputValue.split(" ");
    var wordsWithPlus = wordsArray.join("+");
    var xhr = "https://api.nutritionix.com/v1_1/search/" + wordsWithPlus + "?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=dfe3ca21&appKey=4fd5070b6e65346a9b3407b87c933ee7"

    var nutritionixAJAXCall = new XMLHttpRequest();
    nutritionixAJAXCall.open ('GET', xhr);
    nutritionixAJAXCall.send();

    nutritionixAJAXCall.addEventListener('load', function(e){
      var data = e.target.response;
      var response = JSON.parse(data);
      var search = document.querySelector('.js-search-results');
      nutritionixAPI.renderTracks(response,search);


    });
}

//3. Display the cards


nutritionixAPI.renderTracks = function(items, search){
  // console.log(items.hits[0].fields)
  var arrayItemsHits = items.hits
  arrayItemsHits.forEach(function(item){


    //card
    var card = document.createElement('div');
    card.classList.add('card');

    //image
    var name = document.createElement('div');
    name.classList.add('name');


    var name_nmg = document.createElement('h3');
    name_nmg.classList.add('name_nmg');
    name_nmg.innerHTML = item.fields.item_name;

    name.appendChild(name_nmg);
    
    var bname = item.fields.brand_name;
    var iCal = item.fields.nf_calories;
    var iServSizeQ = item.fields.nf_serving_size_qty;
    var iServSizeU = item.fields.nf_serving_size_unit;


    //content
    var content = document.createElement('div');
    content.classList.add('content');


    var header = document.createElement('div');
    header.classList.add('header');
    header.innerHTML =  "<ul><li>Calories: " + iCal + "</li><li>Serving Size Quantity: " + iServSizeQ + "</li><li>Serving Size Unit: " + iServSizeU + "</li></ul> "
    content.appendChild(header);

    search.appendChild(content);
    //button

    var button = document.createElement('div');
    //button.setAttribute('data-id', track.id);
    button.classList.add('ui', 'bottom', 'attached', 'button', 'js-button');


    var addIcon = document.createElement('i');
    addIcon.classList.add('add', 'icon');

    var span = document.createElement('span');
    span.innerHTML = 'Add to your daily meal list'

    content.appendChild(header);


    button.appendChild(addIcon);
    button.appendChild(span);

    // button.addEventListener('click', function(){
    //   SoundCloudAPI.getEmbed(track.permalink_url);
    // })

    card.appendChild(name);
    card.appendChild(content);
    card.appendChild(button);


    search.appendChild(card);
      
  })
  //items.forEach(function(item){
    // console.log(item);
    //card
    // var card = document.createElement('div');
    // card.classList.add('card');

    // //image
    // var image = document.createElement('div');
    // image.classList.add('image');


    // var image_img = document.createElement('img');
    // image_img.classList.add('image_img');
    // image_img.src = track.artwork_url || 'http://lorempixel.com/100/100/abstract/';

    // image.appendChild(image_img);

    // //content
    // var content = document.createElement('div');
    // content.classList.add('content');


    // var header = document.createElement('div');
    // header.classList.add('header');
    // header.innerHTML = '<a href="' + track.permalink_url + '">' + track.title + '</a>'
    // content.appendChild(header);

    // search.appendChild(content);
    // //button
    // var button = document.createElement('div');
    // button.setAttribute('data-id', track.id);
    // button.classList.add('ui', 'bottom', 'attached', 'button', 'js-button');


    // var addIcon = document.createElement('i');
    // addIcon.classList.add('add', 'icon');

    // var span = document.createElement('span');
    // span.innerHTML = 'Add to Playlist'

    // //content.appendChild(header);


    // button.appendChild(addIcon);
    // button.appendChild(span);

    // button.addEventListener('click', function(){
    //   SoundCloudAPI.getEmbed(track.permalink_url);
    // })

    // card.appendChild(image);
    // card.appendChild(content);
    // card.appendChild(button);


    // search.appendChild(card);



  // });

}


// SoundCloudAPI.getEmbed = function(trackURL){
//   console.log('click i am in embed');
//   SC.oEmbed(trackURL, {
//     auto_play: true
//   }).then(function(embed){
//     console.log('oEmbed response: ', embed);

//     var sidebar = document.querySelector('.col-left');
//     // one after another
//     var box = document.createElement('div');
//     box.innerHTML = embed.html;


//     sidebar.insertBefore(box, sidebar.firstChild);
//     //local storage
//     localStorage.setItem("key", sidebar.innerHTML);

//     // Copied from solution
//     var SCWdiget = SoundCloudAPI.getWidget( embed.childNodes[ 0 ] );

//     // bind the finish event to init
//     SCWdiget.bind('finish', function() {
//       alert("FINISHED");
//       // Playlist.next();

//       // var nextEmbed = sidebar.childNodes[ Playlist.currentTrack ];
//       // var nextWidget = SoundCloudAPI.getWidget( nextEmbed.childNodes[ 0 ] );

//       // nextWidget.play();
//     });
//     SCWdiget.bind('play', function() {
//       var widgetIndex = Array.from( sidebar.childNodes ).indexOf( embed );
//           // OLDer JAVASCRIPT: [].slice.call( sidebar.childNodes ).indexOf( embed ).
//       Playlist.currentTrack = widgetIndex;
//     });
//     //copied from solution





//   });
// }
// SoundCloudAPI.getWidget = function(embedElement) {
// 	return SC.Widget(embedElement);
// }

// var sideBar1 = document.querySelector('.col-left');
// sideBar1.innerHTML = localStorage.getItem('key');


// //4. Add to playlist to play
