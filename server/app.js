import express, { request } from 'express';
import blogsRouter from './routes/blogs';
import mongoose from 'mongoose';
require("dotenv/config");
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
console.log('connected to DB!')
);
const app = express();
app.use(express.json());
app.use('/blogs', blogsRouter);
app.listen(2000);