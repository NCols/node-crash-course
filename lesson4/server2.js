// In lesson 4 we see how to respond with a complete html page instead of writing all the elements separately like in lesson 3
// Here's we're going to add some routing for an /about page and 404

const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Request made') // callback that gets executed
    // console.log(req)
    console.log(req.url, req.method)

    // set header content type
    res.setHeader('Content-type', 'text/html'); // specify content type being sent back to browser, in this case plain text
    
    // Now we're going to find out what path the user is requesting
    let path = './views/';
    // use of switch statement to cycle through the different options
    switch(req.url) {
        case '/':
            path += 'index.html'; // if root requested, we add index.html to the path so that this is the file that gets served
            res.statusCode = 200; // We also add an appropriate status code to each response depending on the requested url
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location','/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // send an html file
    fs.readFile(path, (err, data) => { // content of 'path' stored in 'data'
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

