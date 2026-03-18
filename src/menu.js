import orangeJuice from './assets/orange-juice.jpeg';

class MenuItem {
    constructor(name, description, price, calories, image, type) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.calories = calories;
        this.image = image;
        this.type = type;
        if(!menuItems[this]) {
            menuItems.push(this);
        };
    };
};
const menuItems = [];
export function loadMenuTab() {
    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren('');
    const header = document.createElement('h1');
    header.textContent = 'Menu';

    const beveragesHeader = document.createElement('h2');
    beveragesHeader.textContent = 'Beverages';
    const beveragesDiv = document.createElement('div');

    const appetizersHeader = document.createElement('h2');
    appetizersHeader.textContent = 'Appetizers';
    const appetizersDiv = document.createElement('div');

    const mainDishesHeader = document.createElement('h2');
    mainDishesHeader.textContent = 'Main Dishes';
    const mainDishesDiv = document.createElement('div');

    menuItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('food-div');

        const itemName = document.createElement('h3');
        itemName.classList.add('food-name');
        itemName.textContent = item.name;

        const aboutDiv = document.createElement('div');
        aboutDiv.classList.add('about-food');

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;

        const itemImage = document.createElement('img');
        itemImage.src = item.image;

        aboutDiv.appendChild(itemDescription);
        aboutDiv.appendChild(itemImage);

        const detailsDiv = document.createElement('div');

        const priceSpan = document.createElement('span');
        priceSpan.textContent = `${item.price}$`;

        const caloriesSpan = document.createElement('span');
        caloriesSpan.textContent = `${item.calories} calories`;

        detailsDiv.appendChild(caloriesSpan);
        detailsDiv.appendChild(priceSpan);

        aboutDiv.appendChild(detailsDiv);

        itemDiv.appendChild(itemName);
        itemDiv.appendChild(aboutDiv);
        itemDiv.appendChild(detailsDiv);
        switch(item.type) {
            case 'beverage':
                beveragesDiv.appendChild(itemDiv);
                break;
            case 'appetizer':
                appetizersDiv.appendChild(itemDiv);
                break;
            case 'main dish':
                mainDishesDiv.appendChild(itemDiv);
                break;
        };
    });
    contentDiv.appendChild(header);

    contentDiv.appendChild(beveragesHeader);
    contentDiv.appendChild(beveragesDiv);

    contentDiv.appendChild(appetizersHeader);
    contentDiv.appendChild(appetizersDiv);

    contentDiv.appendChild(mainDishesHeader);
    contentDiv.appendChild(mainDishesDiv);
};