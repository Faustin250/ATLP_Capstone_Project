import express from 'express';
import Blog from '../models/blog';
import blogsController from '../controllers/blogsController';
import mongoose from 'mongoose';
import checkAuth from '../middlewares/check-auth';

const router = express.Router();

router.get('/', (req, res, next) => {
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
});


router.post('/create', checkAuth, (req, res, next) => {

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
});

router.get('/:blogId', (req, res, next) => {
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
});

router.patch('/:blogId', checkAuth, (req, res, next) => {
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
                    message: "Product updated",
                    request: {
                        type: 'GET',
                        url: 'http://localhost:2000/blogs/' + id
                    }
                });
            }
        )
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });

    res.status(200).json({
        message: 'blog updated'
    })
})

router.delete('/:blogId', checkAuth, (req, res, next) => {
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
});

module.exports = router;