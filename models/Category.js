const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    categoryId: {
        type: Number,
        required: [true]
    },
    categoryName: {
        type: String,
        required: [true]
    },
    categoryDescription: {
        type: String,
        required: [true]
    },
    categoryCount: {
        type: Number,
        required: [true]
    }
});

const Category = mongoose.model('category', categorySchema);

module.exports = Category;