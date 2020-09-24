import express from 'express';
import Blog from '../models/blog';
import blogsController from '../controllers/blogsController';

const router = express.Router();
// Get all blogs
router.get('/', blogsController.findAll);

module.exports = router;