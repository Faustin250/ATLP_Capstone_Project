import express from 'express';
import Blog from '../models/blog';
import blogsController from '../controllers/blogsController';
import mongoose from 'mongoose';

const router = express.Router();
 
router.get('/:blogId', blogsController.blogs_get_one);
 
module.exports = router;