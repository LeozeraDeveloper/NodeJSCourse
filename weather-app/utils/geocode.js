const request = require('request');
const chalk = require('chalk');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibGVvemVyYWRldiIsImEiOiJjanpzemc3ZXYwMDFrM2xxaHA1bHppaGM2In0.zIzaj0J5iG0EMdMCQE1bjQ&limit=1'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback(chalk.red('Unable to connect to weather service!'), undefined)
        } else if (response.body.features.length === 0) {
            callback(chalk.red('Unable to find location. Please make sure that location is correct or try another one!'), undefined)
        }else{
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode