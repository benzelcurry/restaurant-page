import Contact from './photos/call.svg';

export default function switchContact() {
    // Create elements for page
    let contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    let img = document.createElement('img');
    img.src = Contact;
    img.alt = 'Call icon';
    img.classList.add('call-icon');

    let contact = document.createElement('div');
    contact.classList.add('contact');
    contact.innerText = 'Call us at: (678) 999-8212';

    // Add elements to page
    content.appendChild(contactContainer);
    contactContainer.appendChild(img);
    contactContainer.appendChild(contact);
}