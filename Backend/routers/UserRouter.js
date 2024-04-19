const express = require('express')
const UserRouter = express.Router()
const {signUp, login} = require('../controllers/UserController')

UserRouter.post('/sign-up', signUp)
UserRouter.post('/login', login)

module.exports = UserRouter