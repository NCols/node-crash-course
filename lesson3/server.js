const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Request made') // callback that gets executed
    // console.log(req)
    console.log(req.url, req.method)

    /* // set header content type
    res.setHeader('Content-type', 'text/plain'); // specify content type being sent back to browser, in this case plain text
    res.write('Hello, world.'); // specify content of response
    res.end() // end the response */

    // but we can also send html back
    res.setHeader('Content-type', 'text/html');
    res.write('<p>Hello, world.</p>');
    res.write('<p>Hello, alone.</p>');
    res.end();
    // In the browser we see that head and body html tags are automatically added, but we could add them manually here as well
});

server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000...');
});

