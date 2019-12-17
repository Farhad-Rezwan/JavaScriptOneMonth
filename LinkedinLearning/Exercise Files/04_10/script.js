//object constructor
function Course(title,instructor,level,published,views){
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views = views;
  this.updateViews = function(){
    return ++this.views;
  }
}
var courses = [
  new Course("JavaScript Essential Training","Morton DeCosta",1,true,10 ),
  new Course("Up and runnnig with ES6","Farhad",2,false,10 )
];



console.log(courses[0].updateViews());
