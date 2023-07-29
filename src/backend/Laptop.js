const mongoose = require("mongoose")


const laptopSchema = new mongoose.Schema({
     name: {
        type: String,
        required: true
    },
        price:{ 
        type: Number,
        required: false
    },
   
    
    
    details: {
        type: String,
        required: false
    },
    
   
    desc: {
        type: String,
        required: true
    },
    thumbnailUrl: {
        type: String,
        required: true
    }
    
    
});

const Book = mongoose.model('Book', bookSchema);

module.exports = { Book, bookSchema };
