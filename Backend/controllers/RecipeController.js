const express = require('express')
const mongoose = require('mongoose')
const Recipe = require('../models/RecipeModel')
const User = require('../models/UserModel')
// const Recipe = require('../models/recipeModel')
//Adding a favorite (CRUD 1)
const addRecipe = async (req, res) => {
    try {
        //Extracting Recipe Data
        const { name, description, ingredients } = req.body
        
        //Create Recipe
        recipeAdded = await Recipe.create({ name: name, description: description, ingredients: ingredients })
        if (!recipeAdded) return res.status(404).json({ Message: "Error! Recipe not added" })
        //Add Recipe to User
        const updateUserRecipes = await User.findOneAndUpdate({ _id: req.userId }, { $push: { recipes: recipeAdded._id } }, { new: true })
        if (!updateUserRecipes) return res.status(404).json({ Message: "Error! Recipe not added to User" })

        if (updateUserRecipes) return res.status(200).json({ Message: "Recipe Added", recipe: recipeAdded, user: updateUserRecipes})
        
        return res.status(404).json({ Message: "Error! REcipe not added" })
    }
    catch (error) {
        return res.status(500).json({ message: "Error! " + error.message })
    }
}

//Removing a favorite (CRUD 2)
const deleteRecipe = async (req, res) => {
    const recipeID = req.headers.recipeid
    try {
        const recipeInstance = await Recipe.findByIdAndDelete({ _id: recipeID })
        //const favoriteInstance = await favoritesModel.findOneAndDelete({ userID: req.userId, _id: favoriteID })
        if (recipeInstance) return res.status(200).json({ Message: "Recipe Deleted", recipe: recipeInstance })
        else return res.status(404).json({ Message: "Error! Recipe not found" })
    } catch (error) {
        return res.status(500).json({ message: "Error! " + error.message })
    }
}

//Viewing all favorites (CRUD 3)
const viewRecipes = async (req, res) => {
    try {
        const recipeIDs = await User.find({ _id: req.userId }).select('recipes').populate('recipes')
        if (!recipeIDs) return res.status(404).json({ Message: "Error! User not found" })


        if (recipeIDs) return res.status(200).json({ Message: "Recipe ID's", recipeIDs: recipeIDs })
        else return res.status(404).json({ Message: "Error! No Recipes Found" })
    } catch (error) {
        return res.status(500).json({ message: "Error! " + error.message })
    }
}

const viewAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find()
        if (recipes) return res.status(200).json({ recipes: recipes })
        else return res.status(404).json({ Message: "Error! No Recipes Found" })
    } catch (error) {
        return res.status(500).json({ message: "Error! " + error.message })
    }
}

const viewRecipeDetails = async (req, res) => {
    const recipeID = req.headers.recipeid
    // console.log(req.headers)
    // console.log(recipeID)
    // return res.status(404).json({ RecipeID: recipeID })
    try {
      //  const recipe = await Recipe.findById(recipeID)
        const recipe = await Recipe.find( {_id: recipeID}).populate('ingredients')

        if (recipe) return res.status(200).json({ Message: "Recipe", recipe: recipe })
        else return res.status(404).json({ Message: "Error! No Recipe Found" })
    } catch (error) {
        return res.status(500).json({ message: "Error! " + error.message })
    }
}

//modifying a Recipe (CRUD 4)
const modifyRecipe = async (req, res) => {
    let name = req.headers.name
    let description = req.headers.description
    let ingredients = req.headers.ingredients
    const recipeID = req.headers.recipeid

    const oldRecipe = await Recipe.findById(recipeID)

    //Adjusting Fields

    if (!name){
        name = oldRecipe.name
    }
    if (!description){
        description = oldRecipe.description
    }
    if (!ingredients){
        ingredients = oldRecipe.ingredients
    }
    try {
        const newRecipe = {
            name: name,
            description: description,
            ingredients: ingredients,
        }
        const recipeInstance = await Recipe.findOneAndUpdate({ _id: recipeID }, newRecipe, { new: true })
        if (recipeInstance) return res.status(200).json({ Message: "Recipe Modified", Recipe: recipeInstance })
        else return res.status(404).json({ Message: "Error! Recipe not found" })
    } catch (error) {
        return res.status(500).json({ message: "Error! " + error.message })
    }
}
module.exports = { addRecipe, deleteRecipe, viewRecipes, modifyRecipe,viewAllRecipes,viewRecipeDetails }