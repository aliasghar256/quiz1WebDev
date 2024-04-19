const express = require('express')
const RecipeRouter = express.Router()
const authenticateToken = require('../middleware/auth')
const {addRecipe, deleteRecipe, viewRecipes, modifyRecipe, viewAllRecipes,viewRecipeDetails} = require('../controllers/RecipeController')

RecipeRouter.get('/view-all-recipes', viewAllRecipes)
RecipeRouter.get('/view-recipe-details', viewRecipeDetails)
RecipeRouter.use(authenticateToken)
RecipeRouter.post('/add', addRecipe)
RecipeRouter.delete('/delete', deleteRecipe)
RecipeRouter.get('/view', viewRecipes)
RecipeRouter.put('/modify', modifyRecipe)


module.exports = RecipeRouter