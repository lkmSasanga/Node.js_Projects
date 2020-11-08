// const fs = require('fs')   // fs module is stored in fs object

// fs.writeFileSync('notes.txt', 'My name is malindu!')

// fs.appendFileSync('notes.txt', ' Hey new line added!')

// const add = require('./utils.js') //link the file

// const name = 'Malindu'

// const sum = add(3, 4)
// console.log(sum)

// const validator = require('validator')

const chalk = require('chalk')
const myNotes = require('./notes.js')

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

const command = process.argv[2]

console.log(process.argv)


if (command === 'add') {
    console.log('Adding note!')
} else if (command == 'remove') {
    console.log('Removing note!')
}