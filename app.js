const request = require('request');
const {promisify} = require('util');
const fs = require('fs');
fs.writeFileSync('turing.txt', 'boring G.')

require('dotenv').config() // https://www.npmjs.com/package.dotenv

const promisifiedRequest = promisify(request);

const getWeather = async () => {

    let data  = await promisifiedRequest({
        uri: `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${process.env.APPID}`,
        json: true
    })

    // Get ALL weather data
    console.log(data.body)
    // Write ALL JSON data to a file in JSON format
    fs.writeFileSync('getWeather.json', JSON.stringify(data.body))

    // Get weather description
    console.log(data.body.weather[0].description)
    // Get name
    console.log(data.body.name)

    console.log(data.body.sys.type)
    console.log(data.body.sys.country)
    console.log(data.body.coord.lon)
    console.log(data.body.coord.lat)
    console.log(data.body.base)
    console.log(data.body.clouds.all)
    console.log(data.body.sys.sunset)
    console.log(data.body.main)
    
}

getWeather()