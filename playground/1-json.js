const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
// }

// //object convert to json
// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)
// fs.writeFileSync('1-json.json', bookJSON)

//convert to js object 
// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

//read from the JSON file
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)

// console.log(data.title)

//get json data from json file and convert into js object
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

//replacing the new name and age
user.name = 'bhagi'
user.age = 22

//converting js object to json and replace
const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)



