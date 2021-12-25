const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const app = express();

// connect to MongoDB
const dbURI = 'mongodb+srv://<usr>:<pwd>@cluster0.deqjh.mongodb.net/ninja-tut?retryWrites=true&w=majority';
 // Async process. then() tells what to do when connection ok. We also need to tell the server to start listening only when this is complete.
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000, 'localhost'))
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');


// middleware & static files (like css, images etc)
app.use(express.static('public')); // allows all of the website to access the files - static files - from the 'public' folder. Without this, all access to files other than the views gets blocked.
app.use(morgan('tiny')); // logging

/* Below are commented out a series of sandbox routes to show the different methods used to store and retrieve data to and from the db. save(), find(), findById(). However, for our final version, we will use the more streamlined way of working, after this block.
// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'Second new blog entry',
        snippet: 'About my new blog',
        body: 'This is boring.'
    });

    blog.save() // When we save() to the db, the db sends us back the document as an object, 'result' below
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err)
        });
});

// Retrieve all the blog entries
app.get('/all-blogs',(req, res) => {
    Blog.find() // find() gets all the entries for the Blog collection
        .then((result) => { // and stores it in 'result'
            res.send(result); // result is then sent back to browser
        })
        .catch((err) => {
            console.log(err);
        });
});

// Retrieve single blog entry
app.get('/single-blog', (req, res) => {
    Blog.findById('61c7391c2920396603359063')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
})
*/

// Basic routes
/* Old version. '/' is now being rerouted to '/blogs' below
app.get('/', (req, res) => {
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'How to defeat Bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    ];
    res.render('index', { title: 'Home', blogs: blogs });
}); */
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});



// Blog routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 }) // find() gets all the entries for the Blog collection. Then sort from newest to oldest.
        .then((result) => { // and stores it in 'result', and now we want to pass it to our view
            res.render('index', { title: 'All Blogs', blogs: result}) // We need to pass 'title' first because it's the first argument needed via head.ejs
        })
        .catch((err) => {
            console.log(err);
        });
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create new blog post' });
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404 Not found' });
});

