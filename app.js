import express from 'express';
import blogsRouter from './routes/blogs';
import UsersRouter from './routes/index';
import contactRouter from './routes/contact';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes';
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

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
// middleware
app.use(express.static('public'));
app.use(express.json());
// view engine
app.set('view engine', 'ejs');

const PORT = 2000;
app.use('/blogs', blogsRouter);
app.use('/', UsersRouter);
app.use('/questions', contactRouter);
app.use(authRoutes);
 
app.listen(PORT, () =>{
    console.log(`App is listening to port:${PORT}`);
});

// cookies
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// app.get('/set-cookies', (req, res) => {

//   // res.setHeader('Set-Cookie', 'newUser=true');
  
//   res.cookie('newUser', false);
//   res.cookie('isEmployee', true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });

//   res.send('you got the cookies!');

// });

// app.get('/read-cookies', (req, res) => {

//   const cookies = req.cookies;
//   console.log(cookies.newUser);

//   res.json(cookies);

// });
 

