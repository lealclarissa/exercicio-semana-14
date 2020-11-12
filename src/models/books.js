const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
    id: { type: String },
    title : { type : String },
    author: { type: String },
    category: { type: String },
    inStock: { type: Boolean }
},{
    versionKey: false
});

const books = mongoose.model('books', booksSchema);

module.exports = books;