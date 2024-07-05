// fs common core module
// to read file

//const fs = require('fs');
/*
fs.readFile('./files/hi.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
});
// buffer data to string
fs.readFile('./files/hi.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});
// another method buffer data ==>> string
fs.readFile('./files/hi.txt' , 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
}); */
// instead of just hard coding the file path we have an handy method**
/*
const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'files', 'hi.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})  */
// what if we have an uncaught error
// if error is present then according the node fs documentation
// process is available within node itself we don't need to export it
/*
fs.readFile('./files/hello.txt', 'utf8' , (err, data) => {
    if (err) throw err;
    console.log(data);
})

process.on('uncaughtException', err => {
    console.error(`there was an uncaught error: ${err}`);
    process.exit(1);
});
*/
//==========================================================//
// how write files 
const fs = require('fs');
const path = require('path');
// here we don't need to have 'utf8' which is provided default in that place we need to have the content of the file like text content...etc and here we only (err) no (data) parameter here ofcourse we're only writing file
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Hello, Nice to meet you', (err) => {
    if (err) throw err;
    console.log("writing file complete!");
})














