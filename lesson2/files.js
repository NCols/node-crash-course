// Import core module we need to interact with filesystem (fs built into node):
const fs = require('fs');

// reading files
// with readFile(), which takes 2 arguments, 1 is the path to the file, 2 is a function that fires when readFile is complete. Function is made up of 'err', a potential error and what to do if it comes up, and 'data' which is the data that's read in the file
// it's an aysnc method (takes 'some' time to do)
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data); // prints <Buffer 54 65 73 74 69 6e 67>
    console.log(data.toString()); // prints actual text content of the file
});
// also, async means the rest of the code here below will not need to wait for all the above to be executed before moving on. Even if readFile takes some time, the rest of the code will already be read and executed, and when readFile is done, it fires the callback function

console.log("last line"); // gets printed in console before 'data' from above


// writing files
// Here we have 3 arguments for writeFile, 1 is the path to doc, 2 is actual content to write to file, 3 is callback function
// This ia also async
fs.writeFile('./docs/blog1.txt', 'Hello, World', () => {
    console.log('File written ok!');
});

// What if we try with file that doesn't exist? -> it creates the file
fs.writeFile('./docs/blog2.txt', 'Hello, again', () => {
    console.log('File written ok!');
});

// directories
if (!fs.existsSync('./assets')) {  // check if folder doesn't exist yet
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err); //f.ex. if folder already exists, it will tell us so
        }
        console.log('Folder created!')
    });
} else {  // else if folder exists, then delete it
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Folder deleted');
    });
}



// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => { // unlink() is the method to delete a file
        if (err) {
            console.log(err)
        }
        console.log('File deleted');
    });
};

