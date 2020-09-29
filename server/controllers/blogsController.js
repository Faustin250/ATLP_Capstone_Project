import Blog from '../models/blog';
import mongoose from 'mongoose';

exports.blogs_create_blog = (req, res, next) => {
  const blog = new Blog({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    intro: req.body.intro,
    content: req.body.content
  });
  blog.save().then(result => {
    console.log(result);
    res.status(201).json({
      message: 'blog created',
      createdBlogs: result
    });

  }).catch(err => {
    console.log(err)
    res.status(500).json({
      error: err
    });
  });
}
 