const express = require('express');
const mongoose = require('mongoose');
const Article = require('./models/article');
const methodOverride = require('method-override')

const articleRouter = require('./routes/articles');
const app = express();
const dbURI = "mongodb+srv://faustin:faustin@learnnode.e3lxu.mongodb.net/nodeDB?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));
 
app.set('view engine', 'ejs'); 
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

// middleware & static files
app.use(express.static('UI/css'));
app.use(express.static('UI/assets'));
 
 app.get('/', (req, res) => {
    res.render('index');
});

app.get('/allArticles', async (req, res) => {
   
  const articles = await Article.find().sort({
    createdAt: 'desc'
  })

  res.render('articles/allArticle', {articles: articles});
});

app.use('/articles', articleRouter)
 


 