const express = require('express')
const path = require('path')
const app = express()


const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/static", express.static(path.join(__dirname, 'public')));
app.use("/", (req, res) => res.send("hello"))

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))