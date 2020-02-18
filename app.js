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

    console.log(data.body)
    // Write JSON data to a file in JSON format
    fs.writeFileSync('getWeather.json', JSON.stringify(data.body))
    
}

getWeather()