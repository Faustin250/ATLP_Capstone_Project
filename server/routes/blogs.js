import express from 'express';
import Blog from '../models/blog';
import blogsController from '../controllers/blogsController';
import mongoose from 'mongoose';

const router = express.Router();
router.get('/', blogsController.blogs_get_all);
 
module.exports = router;