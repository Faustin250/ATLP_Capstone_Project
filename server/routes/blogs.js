import express from 'express';
import Blog from '../models/blog';
import blogsController from '../controllers/blogsController';
import mongoose from 'mongoose';

const router = express.Router();
 
router.post('/create', blogsController.blogs_create_blog);
 
module.exports = router;