// fs common core module
// to read file

const fs = require('fs');

fs.readFile('./files/hi.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
});
fs.readFile('./files/hi.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});
fs.readFile('./files/hi.txt' , 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});


















