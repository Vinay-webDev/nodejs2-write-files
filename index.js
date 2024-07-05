// fs common core module
// to read file

const fs = require('fs');
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
// what if we have an uncaught error
// if error is present then according the node fs documentation
// process is available within node itself we don't need to export it
fs.readFile('./files/hello.txt', 'utf8' , (err, data) => {
    if (err) throw err;
    console.log(data);
})

process.on('uncaughtException', err => {
    console.error(`there was an uncaught error: ${err}`);
    process.exit(1);
});

















