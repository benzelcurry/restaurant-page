export default function switchMenu() {
    // Create elements to be used on menu page
    let menu = document.createElement('div');
    menu.classList.add('menu');

    let firstItem = document.createElement('div');
    firstItem.classList.add('menu-item');
    firstItem.innerText = 'Chicken biryani - $17';

    let secondItem = document.createElement('div');
    secondItem.classList.add('menu-item');
    secondItem.innerText = 'Porkchops - $19';

    let thirdItem = document.createElement('div');
    thirdItem.classList.add('menu-item');
    thirdItem.innerText = 'Tomahawk steak - $52';

    let fourthItem = document.createElement('div');
    fourthItem.classList.add('menu-item');
    fourthItem.innerText = 'Surf \'n\' turf - $71';

    let fifthItem  = document.createElement('div');
    fifthItem.classList.add('fifth-item');
    fifthItem.innerText = 'Wild salmon - $31';

    // Lay everything out on page
    content.appendChild(menu);
    menu.appendChild(firstItem);
    menu.appendChild(secondItem);
    menu.appendChild(thirdItem);
    menu.appendChild(fourthItem);
    menu.appendChild(fifthItem);
}