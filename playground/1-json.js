const fs = require('fs');
const log = console.log;

// const book ={
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book) // Convert String object to JSON data
// fs.writeFileSync('1-json.json', bookJSON)

// const parsedData = JSON.parse(bookJSON) //Convert JSON  to OBJECT 
// log(parsedData.author)

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON)
// log(data.title);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
log(data.name);

data.name = 'Leo';
data.age = 26;
data.planet = 'Earth'


const userJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', userJSON)


