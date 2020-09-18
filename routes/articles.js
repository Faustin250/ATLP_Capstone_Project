const express = require('express');
const Article = require('./../models/article');
 
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('articles/new', { article: new Article() })

})

router.get('/edit/:id', async(req, res) => {

    const article = await Article.findById(req.params.id)
    res.render('articles/new', { article: article })

})

router.get('/:id', async (req, res) =>{
    const article = await Article.findById(req.params.id)
    // if(article == null) res.redirect('/allArticles')
    res.render('articles/show', {article:article})
})

router.post('/', async (req, res, next) => {
    req.article = new Article()
    next()
  }, saveArticleAndRedirect('new'))
  
  router.put('/:id', async (req, res, next) => {
    req.article = await Article.findById(req.params.id)
    next()
  }, saveArticleAndRedirect('edit'))


router.delete('/:id', async (req, res) => {
    await Article.findOneAndDelete(req.params.id)
    res.redirect('/allArticles')
})

function saveArticleAndRedirect(path) {
    return async (req, res) => {
      let article = req.article
      article.title = req.body.title
      article.summary = req.body.summary
      article.content = req.body.content
      try {
        article = await article.save()
        res.redirect(`/articles/${article.id}`) 
      } catch (e) {
        res.render(`articles/${path}`, { article: article })
      }
    }
  }

module.exports = router





 