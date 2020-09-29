import Blog from '../models/blog';
import mongoose from 'mongoose';
 
exports.blogs_delete_one = (req, res, next) => {
  const id = req.params.blogId
  Blog.remove({
      _id: id
    })
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'blog deleted'
      })

    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}