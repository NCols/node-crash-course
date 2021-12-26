// Here we are going to create functions that will control the website, like: blog_index (display all entries), blog_details (displau single post), blog_create_get, blog_create_post, blog_delete

const Blog = require('../models/blog'); // We import the blog model here since we're going to need it, and we won't need it in blogRoutes.js anymore.


const blog_index = (req, res) => {
    Blog.find().sort({
        createdAt: -1
    })
        .then(result => {
            res.render('../views/blogs/index', {
                blogs: result,
                title: 'All blog posts'
            });
        })
        .catch(err => {
            console.log(err);
        });
};

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('../views/blogs/details', {
                blog: result,
                title: 'Blog Details'
            });
        })
        .catch(err => {
            // We actually want it to serve 404 page if there an error here, for example if one searches for an invalid id
            res.status(404).render('404', { title: 'Blog post not found' });
        });
};

const blog_create_get = (req, res) => {
    res.render('../views/blogs/create', {
        title: 'Create a new blog'
    });
};

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then(result => {
            res.redirect('/blogs');
        })
        .catch(err => {
            console.log(err);
        });
};

const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({
                redirect: '/blogs'
            });
        })
        .catch(err => {
            console.log(err);
        });
};

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}