import mongoose, { Schema } from 'mongoose';

const blogsSchema = new Schema({
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
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Blog', blogsSchema);