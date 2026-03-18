import deerImage from './assets/deer dish.jpeg';

export function loadHomeTab() {
    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren('');
    const homeDiv = document.createElement('div');
    const header = document.createElement('h1');
    header.textContent = 'Welcome to Dan\'s Deer';
    const description = document.createElement('p');
    description.textContent = 'The place you can rest assured that today\'s dinner is not getting cold, your taste buds are going to have a thrill of joy, and that the cravings your appetite has been thinking of will finally be fulfilled.';
    const image = document.createElement('img');
    image.src = deerImage;
    image.alt = 'Deer dish';
    homeDiv.appendChild(header);
    homeDiv.appendChild(description);
    homeDiv.appendChild(image);
    contentDiv.appendChild(homeDiv);
};