const express = require('express')
const path = require('path')
const app = express()

const homeRouter = require('./routes/home')
const pugRouter = require('./routes/pug')
const ejsRouter = require('./routes/ejs')

const pugEngine = require('./engine/pug')
const ejsEngine = require('./engine/ejs')

const PORT = process.env.PORT || 8080

ejsEngine(app)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/static", express.static(path.join(__dirname, 'public')));
app.use("/", homeRouter)

app.use("/pug", pugRouter)
app.use("/ejs", ejsRouter)

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))