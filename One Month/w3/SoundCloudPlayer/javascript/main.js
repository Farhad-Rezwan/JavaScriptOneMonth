// 1. Search SoundCloud







//2. query sound SoundCloud using API

// //deskcription of switch (expression) {
//   case expression:
//
//     break;
//   default:
//
// }
var SoundCloudAPI = {};

SC.initialize({ // Why SC is not CamleCase, kind of convention
  client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
});

// find all sounds of buskers licensed under 'creative commons share alike'
SC.get('/tracks', {
  q: 'buskers'//, license: 'cc-by-sa'
}).then(function(tracks) {
  console.log(tracks);
});






//3. Display the cards








//4. Add to playlist to play
