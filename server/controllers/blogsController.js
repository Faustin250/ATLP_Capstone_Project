import Blog from '../models/blog';
import mongoose from 'mongoose';

exports.blogs_get_all = (req, res, next) => {
  Blog.find()
    .select('title intro content')
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        Blog: docs.map(doc => {
          return {
            title: doc.title,
            intro: doc.intro,
            content: doc.content,
            _id: doc._id,

          }
        })
      }
      res.status(200).json(docs);

    }).catch(err => {
      res.status(500).json({
        error: err
      });
    });
}
 