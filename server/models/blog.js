const mongoose = require('mongoose');

const blogsSchema = mongoose.Schema({

  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  intro: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Blog', blogsSchema);