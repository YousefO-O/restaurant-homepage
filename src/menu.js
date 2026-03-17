class MenuItem {
    constructor(name, description, price, calories, image) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.calories = calories;
        this.image = image;
    };
};

const menuItems = [
];
export function loadMenuTab() {
    const contentDiv = document.createElement('div');
    contentDiv.id = 'content';
    const header = document.createElement('h1');
    header.textContent = 'Menu';
    const menuDiv = document.createElement('div');
    menuDiv.id = 'menu-div';
    menuItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('food-div');

        const itemName = document.createElement('h2');
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
        detailsDiv.classList.add('food-details');

        const priceSpan = document.createElement('span');
        priceSpan.textContent = `${item.price}$`;

        const caloriesSpan = document.createElement('span');
        caloriesSpan.textContent = `${item.calories} calories`;

        detailsDiv.appendChild(caloriesSpan);
        detailsDiv.appendChild(priceSpan);
        
        itemDiv.appendChild(itemName);
        itemDiv.appendChild(aboutDiv);
        itemDiv.appendChild(detailsDiv);
        menuDiv.appendChild(itemDiv);
    });
    contentDiv.appendChild(header);
    contentDiv.appendChild(menuDiv);
    document.querySelector('body').appendChild(contentDiv);
};