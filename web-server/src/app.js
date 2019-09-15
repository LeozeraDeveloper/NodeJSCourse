const path = require('path')
const express = require('express');

//Define path for express config
const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

const viwesPath = path.join(__dirname, '../templates');

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viwesPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Leonardo Ramos'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Leozera Dev!'
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Weather',
        TheName: 'Jesus Christ',
        name: 'Leozera D3V!'
    })
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    });
})



// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})