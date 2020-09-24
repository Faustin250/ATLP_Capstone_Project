import express from 'express';
import Blog from '../models/blog';
import blogsController from '../controllers/blogsController';
const router = express.Router();
// Create a blog
router.post('/newBlog', blogsController.createOne);
 
module.exports = router;