import './style.css';
import switchHome from './home.js';
import switchMenu from './menu.js';
import switchLocation from './locations.js';

let content = document.querySelector('#content');

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

// Set up header
content.appendChild(header);
header.appendChild(restoName);
header.appendChild(links);
links.appendChild(link1);
links.appendChild(link2);
links.appendChild(link3);

// Opens to home page by default
switchHome();

restoName.addEventListener('click', () => {
    content.removeChild(content.lastChild);
    switchHome();
})

// Switches to menu page on click
link1.addEventListener('click', () => {
    content.removeChild(content.lastChild);
    switchMenu();
});

// Switches to location page on click
link2.addEventListener('click', () => {
    content.removeChild(content.lastChild);
    switchLocation();
})