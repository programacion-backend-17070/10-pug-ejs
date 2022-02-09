const express = require('express')
const path = require('path')
const app = express()

// importar instrucciones para pug engine
const pugEngine = require('./engines/pug')
const ejsEngine = require('./engines/ejs')

//importar router
const pugRouter = require('./routes/pug')
const ejsRouter = require('./routes/ejs')

const PORT = process.env.PORT || 8080

// pugEngine(app)

app.set('views', './views/ejs');
app.set('view engine', 'ejs');
// middlewares para incluir los parametros en el req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// sirve archivos estaticos en /static
app.use("/static", express.static(path.join(__dirname, 'public')));

// ruta de hello
// app.use("/pug", pugRouter)
app.use("/ejs", ejsRouter)

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))