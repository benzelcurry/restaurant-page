import Location from './photos/location.svg';

export default function switchLocation() {
    // Create elements to be used on page
    let locationContainer = document.createElement('div');
    locationContainer.classList.add('location-container');

    let img = document.createElement('img');
    img.src = Location;
    img.alt = 'Location icon';
    img.classList.add('svg');

    let location = document.createElement('div');
    location.classList.add('location');
    location.innerText = "Follow us on Twitter to see when the meat show will be stopping next in your city.";

    // Lay out elements on page
    content.appendChild(locationContainer);
    locationContainer.appendChild(img);
    locationContainer.appendChild(location);
}