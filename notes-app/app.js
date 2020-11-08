// const fs = require('fs')   // fs module is stored in fs object

// fs.writeFileSync('notes.txt', 'My name is malindu!')

// fs.appendFileSync('notes.txt', ' Hey new line added!')

// const add = require('./utils.js') //link the file

// const name = 'Malindu'

// const sum = add(3, 4)
// console.log(sum)

const myNotes = require('./notes.js')

const msg = myNotes()

console.log(msg)