const mongoose = require('mongoose');
const Schema = mongoose.Schema; // The schema is going to define the structure of the document that we're going to store inside a collection. A model wraps around a schema.

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
        },
    snippet: {
        type: String,
        required: true
        },
    body: {
        type: String,
        required: true
        }
    }, {timestamps: true}); // Will autocreate timestamps for operations

// Next we need to create a model based on the above defined schema. The model brings the interface to communicate with the database collection.

const Blog = mongoose.model('blog-doc', blogSchema); // Model names usually take a capital letter. The name 'blog-doc' must be the same name as the collection on the db, without an s. When we use 'Blog' in the future, it will automatically look for and in the 'blog-docs' collection (with an s).

// Now we need to export the Blog const to make it usable within the project.
module.exports = Blog;

// Our blog schema and model are now created.