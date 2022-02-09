const path = require('path')
const { Router } = require('express');
const Movie = require('../models/Movie')

const router = new Router();
const movieModel = new Movie(path.join(__dirname, '../database/movies.json'))

router.get('/', async (req, res) => {
  const movies = await movieModel.getAll()
  console.log("hola", movies)
  res.render('index', { movies })
});

router.get('/add', (req, res) => res.render('nueva'));
router.get('/result', (req, res) => {
  const movie = req.query.movie
  res.render('result', { movie })
});

router.post('/add', async (req, res) => {
  console.log(req.body)
  movieModel.add(req.body)

  res.redirect(`/ejs/result?movie=${req.body.name}`)
});

module.exports = router