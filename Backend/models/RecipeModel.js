const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    ingredients:[{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Ingredient' }],
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;