const express = require('express')
const UserRouter = require('./UserRouter')
const MainRouter = express.Router()

MainRouter.use('/user',UserRouter)

module.exports = MainRouter