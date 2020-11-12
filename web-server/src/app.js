const path = require('path')
const express = require('express')

// console.log(__dirname)
// console.log(__filename)
// console.log(path.join(__dirname, '../public'))

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')

app.use(express.static(publicDirectoryPath))


// app.get('', (req, res) => {
//     res.render('index')
// })



// app.get('', (req, res) => { // funciton does what want to be done when somewone visits the site
//     res.send('<h1>Weather</h1>')
// }) 

// app.get('/help', (req, res) => {
//     res.send([{
//         name: 'Andrew',
//         age: 23
//     }, {
//         name: 'Sarah',
//         age: 23
//     }])
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>Welcome to About page!</h1>')
// })

app.get('/weather', (req, res) => {
    res.send({
        weather: {
            forecast: 'Rainy',
            location: 'Colombo'
        }
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})


























