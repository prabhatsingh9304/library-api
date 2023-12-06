const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    id: { 
        required: true, 
        type: String,
        unique: true
    },
    title: { 
        required: true, 
        type: String
    },
    author: { 
        required: true, 
        type: String
    },
    publisher: { 
        required: true, 
        type: String
    },
    genre: { 
        required: true, 
        type: String
    },
    ISBN: { 
        required: true, 
        type: String,
        unique: true
    }
});
const Book = mongoose.model('Book', schema);
module.exports = Book;