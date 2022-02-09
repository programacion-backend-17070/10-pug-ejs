const path = require('path')
const { Router } = require('express')

const Movie = require('../models/Movie')
const { route } = require('express/lib/application')

const controller = require('../controllers/templateController')

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
  res.redirect(`/ejs/result?movie=${req.body.name}`)
})

router.get("/result", (req, res) => res.render('result', { movie: req.query.movie }))

router.get("/controller", controller.add)
module.exports = router


