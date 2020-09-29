import express from 'express';
import Blog from '../models/blog';
import blogsController from '../controllers/blogsController';
import mongoose from 'mongoose';
 
const router = express.Router();
router.delete('/:blogId', blogsController.blogs_delete_one);
module.exports = router;