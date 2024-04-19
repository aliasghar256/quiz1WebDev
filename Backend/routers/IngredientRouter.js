const express = require('express')
const IngredientRouter = express.Router()
const {addIngredient, deleteIngredient,modifyIngredient} = require('../controllers/IngredientController')

IngredientRouter.post('/add', addIngredient)
IngredientRouter.delete('/delete', deleteIngredient)
// IngredientRouter.get('/view', viewRecipes)
IngredientRouter.put('/modify', modifyIngredient)


module.exports = IngredientRouter