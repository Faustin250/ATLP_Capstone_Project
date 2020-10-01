const Blog = require("../models/blog");
const mongoose = require("mongoose");
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
      res.status(404).json({
        error: err
      });
    });
}

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

exports.blogs_update_one = (req, res, next) => {
  const id = req.params.blogId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }

  Blog.update({
      _id: id
    }, {
      $set: updateOps
    }).exec()
    .then(
      result => {
        res.status(200).json({
          message: "Blog updated"
        });
      }
    )
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}



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