const mongoose = require("mongoose");


const bookSchema = mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    auther:{
        type:String,
        require:true,
    },
    description:{
        type:String,
    },
    releaseDate:{
        type:String,
        require:true,
    },
    type:{
        type:String,
    },
    count:{
        type:Number,
    },
    img:{
        type:String,
        require:true,
    }

},
    {
        timestamps: true,
    }
)

const Book = mongoose.model('Book', bookSchema)

module.exports = Book;