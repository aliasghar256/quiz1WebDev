const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;