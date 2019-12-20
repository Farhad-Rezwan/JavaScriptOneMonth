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
    var xhr = "https://api.nutritionix.com/v1_1/search/" + wordsWithPlus + "?results=0:5&fields=item_name,brand_name,item_id,nf_calories&appId=dfe3ca21&appKey=4fd5070b6e65346a9b3407b87c933ee7"

    var nutritionixAJAXCall = new XMLHttpRequest();
    nutritionixAJAXCall.open ('GET', xhr);
    nutritionixAJAXCall.send();

    nutritionixAJAXCall.addEventListener('load', function(e){
      var data = e.target.response;
      var response = JSON.parse(data);
      var search = document.querySelector('.js-search-results');
      search.innerHTML = '';
      nutritionixAPI.renderTracks(response,search);


    });
}



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
    var iName = item.fields.item_name;
    name_nmg.innerHTML = iName;

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
    header.innerHTML =  "<ul><li>Brand Name: " + bname + "</li><li>Calories: " + iCal + "</li><li>Serving Size Quantity: " + iServSizeQ + "</li><li>Serving Size Unit: " + iServSizeU + "</li></ul> "
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

    button.addEventListener('click', function(){
      nutritionixAPI.getListed(iName, iCal);
    })

    card.appendChild(name);
    card.appendChild(content);
    card.appendChild(button);


    search.appendChild(card);
      
  })
  

}

nutritionixAPI.getListed = function(item, calory){
  console.log(item, calory);
  var bucketList = document.querySelector('.innerHeading');
  var selectRow = document.querySelector('.tableOfItems');
  var newRow = document.createElement('tr');

  var x = bucketList.innerHTML.length;
  console.log(x)

  if(x == 0){
      var headingPL = prompt("Enter List Name")
      bucketList.innerHTML = '<h4>' + headingPL + '</h4>';
      x++;
  }

  console.log(selectRow);

  console.log(newRow);

  newRow.innerHTML = '<td>' + item + '</td><td>' + calory + '</td>'
  selectRow.appendChild(newRow);


}

nutritionixAPI.plot = function(item, calory){
  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
}