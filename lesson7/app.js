const express = require('express');

const app = express();

// register view engine
app.set('view engine', 'ejs'); // app.set() lets us configure some app settings -> here we set the view engine to ejs

// if our views folder is called something other than 'views', we can use:
// app.set('views', 'myviews');

// listen for requests
app.listen(3000, 'localhost'); 

app.get('/', (req, res) => { // Now, working view views, we don't want to serve a file as a response, but rather 'render a view':
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat Bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index', { title: 'Home', blogs: blogs }); // file extension not needed. Second argument is a value that we can pass over to the index.ejs file when rendering
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

