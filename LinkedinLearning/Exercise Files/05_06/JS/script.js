const FEATURED = document.querySelector(".featured-image");
console.log(FEATURED)
const THEIMAGE = FEATURED.querySelector("img");

var altText = THEIMAGE.getAttribute("alt");

var captionElement = document.createElement("figcaption");

var captionText = document.creteTextNode(altText);

captionElement.appendChield(captionText);

console.log(captionElement)
