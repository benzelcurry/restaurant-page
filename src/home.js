import Food from './photos/food.jpg';

export default function switchHome() {
    // Create elements to be used on main page
    let mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    let foodPhoto = document.createElement('div');
    foodPhoto.classList.add('food-photo');

    let img = document.createElement('img');
    //issue with finding the source image; check previous tutorials for inserting images
    img.src = Food;
    img.alt = "Chicken biryani";
    img.classList.add('food');

    let bodyText = document.createElement('div');
    bodyText.classList.add('body-text');
    bodyText.innerText = 'Here at Meatery, we like to make sure everyone is     welcomed with open arms to a front row ticket to the meat show.'

    // Lay everything out on the page.
    content.appendChild(mainContent);
    mainContent.appendChild(foodPhoto);
    foodPhoto.appendChild(img);
    mainContent.appendChild(bodyText);
}