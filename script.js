// recall async 
// before we need the actual fs readFile, writFile, appendFile and rename
/*
const fs = require('fs');
const path = require('path');

const data = fs.readFile(path.join(__dirname, 'files4', 'text1.txt'), 'utf8', (err) => {
    if (err) throw err;
    console.log("read complete!");
})

function readData (data) {
    console.log(data);
} 
readData(data); */
// we get undefined because of the async nature of node or javascript***

//==============================//
const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'files4', 'text1.txt'), 'utf8', (err) => {
    if (err) throw err;
    console.log("read complete!");

    fs.writeFile(path.join(__dirname, 'files4', 'reply4.txt'), 'hello bro nice to meet you🤝', (err) => {
        if (err) throw err;
        console.log("write complete!");

        fs.appendFile(path.join(__dirname, 'files4', 'reply4.txt'), '\n\n hello bro how are you?', (err) => {
            if(err) throw err;
            console.log("append complete!");

            fs.rename(path.join(__dirname, 'files4', 'reply4.txt'), path.join(__dirname, 'files4', 'newReplay4.txt'), (err) => {
                if (err) throw err;
                console.log("rename complete!");
            })
        })
    })
})
















