const express = require('express')
const path = require('path')
const app = express()

const homeRouter = require('./routes/home')

const PORT = process.env.PORT || 8080

app.use("/static", express.static(path.join(__dirname, 'public')));
app.use("/", homeRouter)

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))