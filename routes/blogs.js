 const express = require("express");
 const Blog = require("../models/blog");
 const blogsController = require("../controllers/blogsController");
 const mongoose = require("mongoose");
 const checkAuth = require("../middlewares/check-auth")

 const router = express.Router();
 router.get('/', blogsController.blogs_get_all);
 router.post('/create',   blogsController.blogs_create_blog);
 router.get('/:blogId',  blogsController.blogs_get_one);
 router.patch('/:blogId',   blogsController.blogs_update_one)
 router.delete('/:blogId',   blogsController.blogs_delete_one);
 module.exports = router;