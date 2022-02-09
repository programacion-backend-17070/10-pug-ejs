const path = require('path')
const { Router } = require('express')

const Movie = require('../models/Movie')
const { route } = require('express/lib/application')

const router = Router()

const movieModel = new Movie()

router.get('/', async (req, res) => {
  const movies = await movieModel.getAll()
  res.render('index', { movies })
})

router.get('/add', (req, res) => res.render('nueva'))
router.post('/add', async (req, res) => {
  console.log(req.body)
  await movieModel.add(req.body)

  // ruta con parametro query string
  res.redirect(`/pug/result?movie=${req.body.name}`)
  // res.render("nombre de la plantilla", {movies: []})
})

router.get("/result", (req, res) => res.render('result', { movie: req.query.movie }))

module.exports = router


