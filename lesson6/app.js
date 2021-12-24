const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000, 'localhost'); // if localhost not specified, express uses localhost by default. We could also store the server in a constant to reuse later -> const server = app.listen(3000)

// routing to a single request with html code
/* app.get('/', (req, res) => {
    // we could use res.write() + res.end(), but we can also use send() which is easier:
    res.send('<p>Home page</p>');
}); */


// routing to multiple requests
/* app.get('/', (req, res) => {
    // we could use res.write() + res.end(), but we can also use send() which is easier:
    res.send('<p>Home page</p>');
});

app.get('/about', (req, res) => {
    // we could use res.write() + res.end(), but we can also use send() which is easier:
    res.send('<p>About page</p>');
}); */

// routing using the html views we created
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname}); // with sendFile we have to specify the root directory of our path. '__dirname' is our current directory
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname}); // with sendFile we have to specify the root directory of our path. '__dirname' is our current directory
});


// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about'); // automatically sets 301 status code
});


// 404 page
app.use((req, res) => {
    // res.sendFile('./views/404.html', { root: __dirname})
    res.status(404).sendFile('./views/404.html', { root: __dirname}) // Here we specify that status code needs to be 404.
});  // use() is used to fire middleware. use() is going to fire for every request made, but only if it reaches this point in the code. So when we do a request, express runs through the whole code top to bottom, looks at all the 'get' handlers, if it finds a match and callback function, it executes it, if not it carries down the file. If reaches use() then it executes its callback. So it's important that this comes after all the other routing handlers in the code.

