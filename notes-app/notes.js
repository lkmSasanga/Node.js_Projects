const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => { // 2
    return 'Your notes....'
}

const addNote =  (title, body) => { // 3
    const notes = loadNotes()
    // const duplicateNotes = notes.filter( (note) => { // 12
    //     return note.title == title
    // })
    // const duplicateNotes = notes.filter((note) => note.title == title)

    const duplicateNote = notes.find((note) => note.title == title) 

    if (!duplicateNote) {
        notes.push ({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.bold.inverse('New note added!'))
    } else {
        console.log(chalk.red.bold.inverse('Note title taken!'))
    }
}

const removeNote = (title) => { //4
    const notes = loadNotes()
    // const notesToKeep = notes.filter(function (note) {
    //     return note.title !== title
    // })
    const notesToKeep = notes.filter((note) => note.title !== title)


    if(notes.length > notesToKeep.length) {
        console.log(chalk.green.bold.inverse('Note Removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.bold.inverse('No note Found!'))
    }
    // console.log(title)
}

// list 
const listNotes = () => {
    console.log(chalk.bold.yellow('Your Notes'))

    const notes = loadNotes()
    // for (let i = 0; i < notes.length; i++) {
    //     console.log(notes[i].title)
    // }
    //another way of for loop

    notes.forEach((note) => {
        console.log(note.title)
    });

}

// read notes
const readNote = (title) => {
    const notes = loadNotes()
    const searchNote = notes.find((note) => note.title === title)

    if(searchNote) {
        console.log(chalk.bold.inverse(searchNote.title))
        console.log(searchNote.body)
    } else {
        console.log(chalk.red.bold.inverse('No note found!'))
    }
    

}
 
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => { // 5

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
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