const fs = require('fs/promises');
const path = require('path');

contactsPath = path.join(__dirname, 'contacts.json');
// contactsPath = path.resolve('db', 'contacts.json');

async function listContacts() {
    const data = await fs.readFile(contactsPath, 'utf-8');
    return JSON.parse(data);
}

async function getContactById(contactId) {
    const contacts = await listContacts();

    const contactById = contacts.find(item => item.id === contactId);

    return contactById || null;
}

async function removeContact(contactId) {
    // ...твій код
}

async function addContact(name, email, phone) {
    // ...твій код
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};
