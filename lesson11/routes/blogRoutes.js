const express = require('express');
const router = express.Router();
// We create a new router, and we will be able to attach all these routing requests to the router instead of app
// This instance of router is like a mini-app, like the app but standing alone and not doing anything by itself. That's why at bottom of this code we export the router

const blogController = require('../controllers/blogController') // This will give us access to the functions that we created and exported in blogController.js

// blog routes
// So now instead of running a whole block of code from here every time, we separate the routes from the controller code, and when a route gets called, we actually call blogController and execute the desired function from there. Makes the code more modular and manageable when project size increases.
router.get('/', blogController.blog_index); 
router.post('/', blogController.blog_create_post);
router.get('/create', blogController.blog_create_get);
router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);

// Export router
module.exports = router;