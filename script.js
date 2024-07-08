// recall async 
// before we need the actual fs readFile, writFile, appendFile and rename

const fs = require('fs');
const path = require('path');

const data = fs.readFile(path.join(__dirname, 'files4', 'text1.txt'), 'utf8', (err) => {
    if (err) throw err;
    console.log("read complete!");
})

function readData (data) {
    console.log(data);
} 
readData(data);
// we get undefined because of the async nature of node or javascript***


















