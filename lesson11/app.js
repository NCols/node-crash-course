const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')

// express app
const app = express();

// connect to mongodb & listen for requests
const dbUconst dbURI = '<connectionURI>';
connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
// We have removed all the codes related to the '/blogs...' routes, to tidy up our code, make it more modular and manageable -> copied all the blogs routes to the ./routes/blogRoutes.js file. We still need to tell our app that they exist, so:
app.use('/blogs', blogRoutes); // Checks in blogRoutes.js and passes all the handlers and actions back to app. We also put in  '/blogs' here, si that we can clean it up from the blogRoutes code. In blogRoutes, we now specify only what is supposed to come after '/blogs' in the endpoint. Makes it more manageable.


// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});