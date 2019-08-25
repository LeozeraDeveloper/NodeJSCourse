const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./note.js');
const log = console.log;

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',

        },
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
});

//Create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});


//Create a read command

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});


//Create a list command

yargs.command({
    command: 'list',
    describe: 'List a note',
    handler() {
        notes.listNotes()
    }
});


yargs.parse()











//log(yargs.argv);