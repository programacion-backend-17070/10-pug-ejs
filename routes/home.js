const path = require('path')
const { Router } = require('express');

const router = new Router();

router.get('/', (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));
router.get('/add', (req, res) => res.sendFile(path.join(__dirname, "../public/nueva.html")));

module.exports = router