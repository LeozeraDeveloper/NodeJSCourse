const path = require('path')
const express = require('express');
const hbs = require('hbs');
//Define path for express config
const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');
const partialsPath = path.join(__dirname, '../templates/partials');

const viwesPath = path.join(__dirname, '../templates/views');

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viwesPath);
hbs.registerPartials(partialsPath);
//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Leozera D3V!'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Leozera D3V!'
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        TheName: 'Jesus Christ',
        name: 'Leozera D3V!'
    })
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    });
});

app.get('help/*', (req, res) => {
    res.render('404',{
        title:'404',
        name:'Leozera D3v!',
        errorMessage:'Help article was not found!'
    });
});

app.get('*', (req, res) => {
    res.render('404',{
        title:'404',
        name:'Leozera D3v!',
        errorMessage:'Page was not found!'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})