const express = require('express');
const morgan = require('morgan');

const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000, 'localhost'); 

// Example of middleware for logging requests. In actuality we're going to use the middleware called 'morgan', that does a better job.
/* app.use((req, res, next) => {
    console.log('New request made:');
    console.log('host:', req.hostname);
    console.log('path:', req.path);
    console.log('method:', req.method);
    console.log('--------------------')
    next(); // Allows to move on to the rest of the code, without the next() the code is hanging and the pages are never rendered
});
*/


// middleware & static files (like css, images etc)
app.use(express.static('public')); // allows all of the website to access the files - static files - from the 'public' folder. Without this, all access to files other than the views gets blocked.
app.use(morgan('tiny'));


app.get('/', (req, res) => { 
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat Bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index', { title: 'Home', blogs: blogs }); 
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' }); 
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create new blog post' });
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404 Not found' }); 
});  

