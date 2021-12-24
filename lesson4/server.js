// In lesson 4 we see how to respond with a complete html page instead of writing all the elements separately like in lesson 3

const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Request made') // callback that gets executed
    // console.log(req)
    console.log(req.url, req.method)

    // set header content type
    res.setHeader('Content-type', 'text/html'); // specify content type being sent back to browser, in this case plain text
    
    // send an html file
    fs.readFile('./views/index.html', (err, data) => { // content of index.html stored in 'data'
        if (err) {
            console.log(err);
            res.end(); // to make sure the process doesn't stay hanging in case we have an error
        } else {
            // res.write(data); -> not needed if we just write once, like here. We could use multiple res.write statements to write multiple distincts things. But here we can just say res.end(data) and it will send the data and end the connection.
            res.end(data);
        }; 

    });

});

server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000...');
});

