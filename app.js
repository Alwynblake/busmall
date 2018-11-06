'use strict';
// use global variables
var totalClicks = 0;

var firstImg = document.getElementById('first');
var secondImg = document.getElementById('second');
var thirdImg = document.getElementById('third');
//set up a constructor to setup an object for every image downloaded
//and to keep track of the times the image is displayed.
//instantiate new objects:
var allProducts = [];
function Product(name, imgPath, altText) {
  //mage a property on the constructor function(product):

  this.name = name;
  this.imgPath = imgPath;
  this.altText = altText;
  this.views = 0; //the other properties havent been seen.set them to 0
  this.votes = 0; // everytime you click on an object increase this value
  allProducts.push(this);//push this whenever the object is instantiated
}
//new product instantiates a new object
new Product('bag', './assets/bag.jpg');
new Product('banana', './assets/banana.jpg');
new Product('bathroom', './assets/bathroom.jpg');
new Product('boots', './assets/boots.jpg');
new Product('breakfast', './assets/breakfast.jpg');
new Product('bubblegum', './assets/bubblegum.jpg');
new Product('chair', './assets/chair.jpg');
new Product('cthulhu', './assets/cthulhu.jpg');
new Product('dog-duck', './assets/dog-duck.jpg');
new Product('dragon', './assets/dragon.jpg');
new Product('pen', './assets/pen.jpg');
console.log(allProducts);

//create a random image function
function randomImage() {
  var firstRandom = Math.floor(Math.random() * allProducts.length);
  var secondRandom = Math.floor(Math.random() * allProducts.length);
  var thirdRandom = Math.floor(Math.random() * allProducts.length);

  //grab a random image from the array; access it at the index 'randomFirst' on the array.
  firstImg.src = allProducts[firstRandom].imgPath;
  secondImg.src = allProducts[secondRandom].imgPath;
  thirdImg.src = allProducts[thirdRandom].imgPath;

  //everytime a random image is called 'totaClicks' increments
  totalClicks++;
  console.log(totalClicks);
  //add an if statement to stop running at 25 clicks. stop the event listener from functioning
  if (totalClicks === 25) {
    firstImg.removeEventListener('click', randomImage);
    secondImg.removeEventListener('click', randomImage);
    thirdImg.removeEventListener('click', randomImage);
  }
};
randomImage();
// add event listeners to receive the value of the callback function 
firstImg.addEventListener('click', randomImage);
secondImg.addEventListener('click', randomImage);
thirdImg.addEventListener('click', randomImage);
