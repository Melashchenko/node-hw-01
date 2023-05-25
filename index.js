console.log('Hello world, I am back, again');

const contactsService = require('./db');

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'list':
            const contacts = await contactsService.listContacts();
            return console.log(contacts);
        case 'getContactById':
            const contactById = await contactsService.getContactById(id);
            return console.log(contactById);
        default:
            return console.log('Unknown action');
    }
};

// invokeAction({ action: 'list' });
invokeAction({ action: 'getContactById', id: 'qdggE76Jtbfd9eWJHrssH' });
