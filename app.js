'use strict';
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
new Product('banana', './asse/banana.jpg');
new Product('bathroom', './assets/bathroom.jpg');
new Product('boots', './assets/boots.jpg');
new Product('breakfast', './assets/breakfast.jpg');
new Product('bubblegum', './assets/bubblegum.jpg');
new Product('chair', './assets/chair.jpg');
new Product('cthulhu', './assets/cthulthu.jpg');
new Product('dog-duck', './assets/dog-duck.jpg');
new Product('dragon', './assets/dragon.jpg');
new Product('pen', './assets/pen.jpg');
console.log(allProducts);

//create a random image function
function randomImage() {
  var firstRandom = Math.floor(Math.random() * allProducts.length);
  console.log(firstRandom);

  firstImg.src = allProducts[firstRandom].imgPath;
};
randomImage();
//grab a random image from the array; access it at the index 'randomFirst' on the array.