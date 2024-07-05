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

console.log("Hello Bro👋"); 
// here we don't need to have 'utf8' which is provided default in that place we need to have the content of the file like text content...etc and here we only (err) no (data) parameter here ofcourse we're only writing file
/*
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Hello, Nice to meet you', (err) => {
    if (err) throw err;
    console.log("writing file complete!");
}) */

// we can also write files using appednFile method which is usually used for updating content within the file but it is to show it still can create a new file
/*
fs.appendFile(path.join(__dirname, 'files', 'reply2.txt'), 'Hello, its jack again!', (err) => {
    if (err) throw err;
    console.log("writing file is complete!");
}); */

// if it's necessary to update a file it is better to write or chain appendFile method inside writeFile method*****
// and there is another method called rename which can be used to re-name the file**
/*
fs.writeFile(path.join(__dirname, 'files', 'reply3.txt'), 'Hi, jack here again!', (err) => {
    if (err) throw err;
    console.log("write file complete!");
    fs.appendFile(path.join(__dirname, 'files', 'reply3.txt'), 'n\n\hello bro nice to meet you.', (err) => {
        if (err) throw err;
        console.log("appendFile complete!");
        fs.rename(path.join(__dirname, 'files', 'reply3.txt'), 'Newreply.txt', (err) => {
            if (err) throw err;
            console.log("rename complete!");
        });
    });
}); */

fs.writeFile(path.join(__dirname, 'files', 'reply4.txt'), 'Hi, its xian here', (err) => {
    if (err) throw err;
    console.log("write complete!");

    fs.appendFile(path.join(__dirname, 'files', 'reply4.txt'), '\n\n helle bro nice to meet you🤝', (err) => {
        if (err) throw err;
        console.log("append complete!");

        fs.rename(path.join(__dirname, 'files', 'reply4.txt'), path.join(__dirname, 'files', 'Newreply111.txt'), (err) => {
            if (err) throw err;
            console.log("rename complete!");
        })
    })
})















// as we can the console.log("hello bro") is executed first then the fs. modules are execute this is async ===>> like node it telling you goahead I'll catch up later!! we are fimiliar with async/await in vanilla javascript***
// the above chain is kinda a callback hell to prevent or to avoid these callback hell we need to use async/await in node 
// how to use async/await in node:








