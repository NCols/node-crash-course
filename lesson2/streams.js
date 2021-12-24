const fs = require('fs');

// We're going to create a stream to read our file progressively
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt'); // used to write stream to a file
const writeStream2 = fs.createWriteStream('./docs/blog5.txt');

readStream.on('data', (chunk) => {   // '.on' is an 'event listener' - this is basically what should happen when readStream receives a chunk of data from the stream
    console.log('------- NEW CHUNK --------');
    console.log(chunk);  // chunk.toString() here would work to display the actual text from the file, but we already specified encoding utf-8 in createReadStream, which already encodes the hex data into text data
    writeStream.write('\n NEW CHUNK \n');
    writeStream.write(chunk); // when chunks are being read in stream and fed through readStream, they are written to blog4.txt
});

// We can also use a 'pipe'. But for a pipe we need a flow from readable stream to writeable one. Basically it replaces the readStream.on() from above
// piping:
readStream.pipe(writeStream2);  // we pipe readStream to writeStream2 -> works
