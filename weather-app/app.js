
//npm request

//npm init -y

const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
// console.log(process.argv)

// const url = 'http://api.weatherstack.com/current?access_key=28fbc2383faf6e7f5ef1f201c994ed83&query=New%20York?language=si'

// request({url: url, json: true}, (error, response) => {

    // console.log(response)

    // const data = JSON.parse(response.body)
    // console.log(data.current)

    // console.log(response.body.current)

    // if(error) {
    //     console.log('Unable to connect to weather service')
    // } else if(response.body.error) {
    //     console.log('Unable to find location')    
    // }
    // else {
    //     console.log('It is currently '+ response.body.current.temperature +
    //     ' degrees out in ' + response.body.location.name)
    // }



    // console.log(response.body.current.weather_icons[0])
// })


// const geoCode = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWFsaW5kdTk3IiwiYSI6ImNraGRpd3BmYTA3b2oyeW9mZnI0dnpkZTkifQ.56EtgfScycbivluGOc3Rwg&limit=1'

// request({url: geoCode, json: true}, (error, response) => {

//     if(error) {
//         console.log('Unable to connect to location services!')
//     } else if(response.body.features.length == 0) {
//         console.log('Unable to find location, try another search!')
//     }else {
//         const lat = response.body.features[0].center[1]
//         const lon = response.body.features[0].center[0]
//         console.log(lat, lon)
//     }


// geocode---------------------------------------------

if(!address) {
    console.log('Please Provide address!!!')
} else {
    geocode(address, (error, { location }) => {
        // console.log('Error ' + error)
        // console.log('Data ' , data)
    
        if(error) {
            return console.log(error)
        }
    
        forecast(location, (error, forecastData) => {
            // console.log('Error', error)
            // console.log('Data', data)
    
            if(error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
        
    })  
    
}




