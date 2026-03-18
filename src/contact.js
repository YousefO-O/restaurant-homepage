class Contact {
    constructor(name, position, telephone, email) {
        this.name = name;
        this.position = position;
        this.telephone = telephone;
        this.email = email;
    };
};

const contacts = [
    new Contact('Joey', '555-555-5554', 'Chef', 'totallyRealEmail@notFake.com'),
    new Contact('Daniel', '555-555-5555', 'Manager', 'perfectlyRealEmail@notFake.com'),
    new Contact('Fred', '555-555-5556', 'Waiter', 'totallyRealEmail@notFake.com'),
];

export function loadContactTab() {
    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren('');
    const contactTabDiv = document.createElement('div');
    contactTabDiv.id = 'contact-tab';

    const header = document.createElement('h1');
    header.textContent = 'Contact Us';

    const contactsDiv = document.createElement('div');
    contactsDiv.id = 'contacts';

    contacts.forEach(contact => {
        const contactDiv = document.createElement('div');
        contactDiv.className = 'contact';
        
        const contactName = document.createElement('h3');
        contactName.textContent = contact.name;

        const contactPosition = document.createElement('p');
        contactPosition.textContent = contact.position;

        const contactTelephone = document.createElement('p');
        contactTelephone.textContent = contact.telephone;

        const contactEmail = document.createElement('p');
        contactEmail.textContent = contact.email;

        contactDiv.appendChild(contactName);
        contactDiv.appendChild(contactPosition);
        contactDiv.appendChild(contactTelephone);
        contactDiv.appendChild(contactEmail);
        contactsDiv.appendChild(contactDiv);
    });
    contactTabDiv.appendChild(header);
    contactTabDiv.appendChild(contactsDiv);
    contentDiv.appendChild(contactTabDiv);
}