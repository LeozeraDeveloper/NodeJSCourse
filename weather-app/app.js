const request = require('request');
const chalk = require('chalk');

const url = 'https://api.darksky.net/forecast/686902c151fc801d89b03db0e820147c/37.8267,-122.4233'; // ?units=s = celsius

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!');
    } else if (response.body.error) {
        console.log('Unable to find location!');
    }
    else {
        console.log(response.body.daily.data[0].summary + ' Its currently: ' + response.body.currently.temperature + ' degrees out. There is a 0% chance of rain!.');
    }
});

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGVvemVyYWRldiIsImEiOiJjanpzemc3ZXYwMDFrM2xxaHA1bHppaGM2In0.zIzaj0J5iG0EMdMCQE1bjQ';

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.log(chalk.red('Unable to connect to weather service!'));
    } else if (response.body.features.length === 0) {
        console.log(chalk.red('Unable to find location. Please make sure that location is correct or try another one!'));

    } else {
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        console.log(latitude, longitude);
    }

});