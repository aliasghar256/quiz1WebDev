const express = require('express')
const UserRouter = require('./UserRouter')
const authenticateToken = require('../middleware/auth')
const RecipeRouter = require('./RecipeRouter')
const IngredientRouter = require('./IngredientRouter')
const MainRouter = express.Router()

MainRouter.use('/user',UserRouter)
MainRouter.use('/recipe',RecipeRouter)
MainRouter.use('/ingredient',IngredientRouter)

module.exports = MainRouter