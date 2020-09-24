import express from 'express';
import Blog from '../models/blog';
import blogsController from '../controllers/blogsController';
 
// import getSingleBlog from '../middlewares/getSingleBlog';

const router = express.Router();
// Update blog
router.patch('/:id', getBlog, blogsController.updateOne);
 
module.exports = router;