// const fs = require('fs')   // fs module is stored in fs object

// fs.writeFileSync('notes.txt', 'My name is malindu!')

// fs.appendFileSync('notes.txt', ' Hey new line added!')

// const add = require('./utils.js') //link the file

// const name = 'Malindu'

// const sum = add(3, 4)
// console.log(sum)

// const validator = require('validator')

const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// const msg = myNotes()
// console.log(msg)

// console.log(validator.isEmail('andrew@gmail.com'))
// console.log(validator.isURL('https://www.goolge.com'))
// console.log(validator.isFloat('simple'))

// const greenMsg = chalk.blue.bold.inverse('Success!')
// const yellowMsg = chalk.yellow.bold('Success!')
// const redMsg = chalk.red.bold.inverse('Error!')


// console.log(greenMsg)
// console.log(yellowMsg)
// console.log(redMsg)

// to run in nodemon app.js

// console.log(process.argv[2]) //input from console and add to arg array

// const command = process.argv[2]

// console.log(process.argv)


// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command == 'remove') {
//     console.log('Removing note!')
// }

//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command( {
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Description',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){  // 1
        // console.log('Title: ' + argv.title)
        // console.log('Body: ' + argv.body)
        notes.addNote(argv.title, argv.body)
    }

})

//create remove command
yargs.command( {
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // console.log('Removing the note!')
        notes.removeNote(argv.title)

    }
})

// create list command
yargs.command ({
    command: 'list',
    describe: 'List of notes',
    handler() {
        // console.log('Showing the list of notes!')
        notes.listNotes()
    }
})

//create read command
yargs.command ({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
            }
        },
    handler(argv) {
        // console.log('Reading a note!')
        notes.readNote(argv.title)
    }
})

//add, remove, read, list

yargs.parse()

// console.log(process.argv)
// console.log(yargs.argv)