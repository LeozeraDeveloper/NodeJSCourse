const request = require('request');
const chalk = require('chalk');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/686902c151fc801d89b03db0e820147c/' + latitude + ',' + longitude+'?utils=si';
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback(chalk.red('Unable to connect to weather service!'), undefined)
        } else if (body.error) {
            callback(chalk.red('Unable to find location. Please make sure that location is correct or try another one!'), undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' Its currently: ' + body.currently.temperature + ' degrees out. There is a 0% chance of rain!.')
        }
    })
}

module.exports = forecast;