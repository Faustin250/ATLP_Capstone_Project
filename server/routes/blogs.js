import express from 'express';
import Blog from '../models/blog';
import blogsController from '../controllers/blogsController';
 
// import getSingleBlog from '../middlewares/getSingleBlog';

const router = express.Router();
// Get all blogs
router.get('/', blogsController.findAll);
// // Get single blog
// router.get('/:id', getBlog, blogsController.findOne);

// Get One middleware
async function getBlog(req, res, next) {
    let blog;
    try{
     blog = await Blog.findById(req.params.id);
     if(blog == null){
         return res.status(404).json({message: 'Blog not found'});
     }
    } catch(err) {
        return res.status(500).json({
            message: err.message,
        });
    }
    res.blog = blog;
    next();
}


module.exports = router;