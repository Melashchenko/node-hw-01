const contactsService = require('./db');
// const argv = require('yargs').argv;

const { Command } = require('commander');
const program = new Command();
program
    .option('-a, --action <type>', 'choose action')
    .option('-i, --id <type>', 'user id')
    .option('-n, --name <type>', 'user name')
    .option('-e, --email <type>', 'user email')
    .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'list':
            const contacts = await contactsService.listContacts();
            return console.log(contacts);
        case 'get':
            const contactById = await contactsService.getContactById(id);
            return console.log(contactById);
        case 'add':
            const newContact = await contactsService.addContact({
                name,
                email,
                phone,
            });
            return console.log(newContact);
        case 'remove':
            const removeContact = await contactsService.removeContact(id);
            return console.log(removeContact);
        default:
            return console.log('Unknown action');
    }
};

invokeAction(argv);
