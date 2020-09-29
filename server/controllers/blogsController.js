import Blog from '../models/blog';
import mongoose from 'mongoose';

exports.blogs_get_one = (req, res, next) => {
  const id = req.params.blogId
  Blog.findById(id)
    .exec()
    .then(doc => {
      console.log(doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({
          message: 'No valid entry found for that id'
        });
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      });
    });
}
 