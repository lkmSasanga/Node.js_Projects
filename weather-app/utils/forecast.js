const request = require('request')

const forecast = (location, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=28fbc2383faf6e7f5ef1f201c994ed83&query=' + encodeURIComponent(location)+ '?language=si'

    request({ url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect location sevices!', undefined)
        } else if (response.body.current.length == 0) {
            callback('Unable to find location. Find another search!', undefined)
        } else {
            callback(undefined, 'It is currently '+ response.body.current.temperature +
                ' degrees out in ' + response.body.location.name )
                // {
                // latitude: response.body.features[0].center[0],
                // longitude: response.body.features[0].center[1],
                // location: response.body.features[0].place_name
                
                // location: response.body.location.name,
                // tempterature: response.body.current.temperature
            // })
        }
    })
}

module.exports = forecast
