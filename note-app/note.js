const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return 'Your notes...';
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New note added!'));
    } else {
        console.log(chalk.red('Note title taken!'));
    }


}
const readNote = (title) => {
    const notes = loadNotes()
    const noteFind = notes.find((note) => note.title === title)

    if (noteFind) {
        console.log(chalk.green.inverse('Title name: ' + noteFind.title + ' Body name: ' + noteFind.body));

    } else {
        console.log(chalk.inverse.red('Note was not found!'));

    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const noteToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > noteToKeep) {
        saveNotes(noteToKeep)
        console.log(chalk.green('Note removed!'));
    } else {
        console.log(chalk.red('Note note found!'));
    }

}


const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'));
    notes.forEach((note) => {
        console.log(note.title)
    });
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}