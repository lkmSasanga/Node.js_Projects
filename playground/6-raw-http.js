const https = require('https')

// const url = 'http://api.weatherstack.com/current?access_key=28fbc2383faf6e7f5ef1f201c994ed83&query=Boston?language=si'
const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Boston.json?access_token=pk.eyJ1IjoibWFsaW5kdTk3IiwiYSI6ImNraGRpd3BmYTA3b2oyeW9mZnI0dnpkZTkifQ.56EtgfScycbivluGOc3Rwg&limit=1'


const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) =>{
        data = data + chunk.toString()
        // console.log(chunk)
    })

    response.on('end', () => {
        // console.log(data)
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})
request.end()