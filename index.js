const request = require('request');
// Capital const as API documentation requests it...

require('dotenv').config() // https://www.npmjs.com/package.dotenv

const getWeather = () => {
    request({
       uri: `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${process.env.APPID}`,
       json: true
    }, (err, res) => {
        if (err) throw err;
        console.log(res.body);

    })
}

getWeather();