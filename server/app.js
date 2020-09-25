import express from 'express';
import blogsRouter from './routes/blogs';
import mongoose from 'mongoose';

// MongoDB Connection
const dbURI = "mongodb+srv://faustin:faustin@learnnode.e3lxu.mongodb.net/nodeDB?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('open', () => {
  console.log('DB Connected');
});

db.on('error', () => {
  console.log('DB Connection failled');
});
const app = express();
app.use(express.json());
const PORT = 2000;
app.use('/blogs', blogsRouter);
app.listen(PORT, () =>{
    console.log(`App is listening to port:${PORT}`);
});

