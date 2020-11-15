const path = require('path')
const express = require('express')
const hbs = require('hbs')

// console.log(__dirname)
// console.log(__filename)
// console.log(path.join(__dirname, '../public'))

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Malindu Sasanga'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Malindu Sasanga'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'Hey I am here to help you!',
        name: 'Malindu',
        title: 'Help'

    })
})

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

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Malindu Sasanga',
        errorMessage: 'Help aticle not found!'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Malindu Sasanga',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})