const Ingredient = require('../models/IngredientModel')

//Adding a favorite (CRUD 1)
const addIngredient = async (req, res) => {
    try {
        //Extracting Recipe Data
        const { name, description } = req.body
        
        //Create favorite
        ingredientAdded = await Ingredient.create({ name: name, description: description })
        if (ingredientAdded) return res.status(200).json({ Message: "Recipe Added", ingredient: ingredientAdded })
        
        return res.status(404).json({ Message: "Error! Ingredient not added" })
    }
    catch (error) {
        return res.status(500).json({ message: "Error! " + error.message })
    }
}

//Removing a favorite (CRUD 2)
const deleteIngredient = async (req, res) => {
    const ingredientID = req.headers.ingredientID
    try {
        const ingredientInstance = await favoritesModel.findByIdAndDelete({ _id: ingredientID })
        //const favoriteInstance = await favoritesModel.findOneAndDelete({ userID: req.userId, _id: favoriteID })
        if (recipeInstance) return res.status(200).json({ Message: "Ingredient Deleted", ingredient: ingredientID })
        else return res.status(404).json({ Message: "Error! Ingredient not found" })
    } catch (error) {
        return res.status(500).json({ message: "Error! " + error.message })
    }
}

//modifying a Recipe (CRUD 4)
const modifyIngredient = async (req, res) => {
    const name = req.headers.name
    const description = req.headers.description
    const recipeID = req.headers.recipeID
    //Adjusting Fields

    try {
        const newIngredient = {
            name: name,
            description: description,
        }
        const ingredientInstance = await Recipe.findOneAndUpdate({ _id: recipeID }, newIngredient, { new: true })
        if (ingredientInstance) return res.status(200).json({ Message: "Recipe Modified", Ingredient: ingredientInstance })
        else return res.status(404).json({ Message: "Error! Ingredient not found" })
    } catch (error) {
        return res.status(500).json({ message: "Error! " + error.message })
    }
}

module.exports = { addIngredient, deleteIngredient,modifyIngredient }