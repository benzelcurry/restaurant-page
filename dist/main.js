/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
let content = document.querySelector('#content');

console.log("Hello");

// Create elements to be used on main page
let header = document.createElement('div');
header.classList.add('header');

let restoName = document.createElement('div');
restoName.classList.add('resto-name');
restoName.innerText = 'Meatery.';

let links = document.createElement('div');
links.classList.add('links');

let link1 = document.createElement('div');
link1.classList.add('link');
link1.innerText = 'Menu';

let link2 = document.createElement('div');
link2.classList.add('link');
link2.innerText = 'Locations';

let link3 = document.createElement('div');
link3.classList.add('link');
link3.innerText = 'Contact';

let mainContent = document.createElement('div');
mainContent.classList.add('main-content');

let foodPhoto = document.createElement('div');
foodPhoto.classList.add('food-photo');

let img = document.createElement('img');
//issue with finding the source image; check previous tutorials for inserting images
img.src = "photos/food.jpg";
img.alt = "Chicken biryani";
img.classList.add('food');

let bodyText = document.createElement('div');
bodyText.classList.add('body-text');
bodyText.innerText = 'Here at Meatery, we like to make sure everyone is     welcomed with open arms to a front row ticket to the meat show.'

// Lay everything out on the page.
content.appendChild(header);
header.appendChild(restoName);
header.appendChild(links);
links.appendChild(link1);
links.appendChild(link2);
links.appendChild(link3);

content.appendChild(mainContent);
mainContent.appendChild(foodPhoto);
foodPhoto.appendChild(img);
mainContent.appendChild(bodyText);

/******/ })()
;