const express = require('express')
const MainRouter = require('./routers/MainRouter')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const port = 5000
mongoose.connect("mongodb://localhost:27017/Quiz1")
    .then(() => {
        console.log('DB Connected successfully.')
    })
    .catch((err) => {
        console.log('Error in DB Connection', err)
    })

app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
    console.log('HTTP Method: ', req.method, " URL: ", req.url)
    next()
})
app.use('/',MainRouter)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})