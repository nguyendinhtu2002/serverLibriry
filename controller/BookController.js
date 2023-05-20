const Book = require("../model/Book")


const createBook = async (req, res,next) => {
    try {
        const { title, auther, description, releaseDate, type, count } = req.body
        if (!title) {
            return res.json({ message: "The input is required", type: 'Title' })
        }
        else if (!auther) {
            return res.json({ message: "The input is required", type: 'Auther' })
        }
        else if (!releaseDate) {
            return res.json({ message: "The input is required", type: 'RelaseDate' })
        }
        const boookNew = await Book.create({
            title,
            auther,
            description,
            releaseDate,
            type,
            count,
        })
        if (boookNew) {
            return res.status(200).json({ message: "Thêm thành công" });
        }
        else {
            return res.status(400).json({ message: "Thêm không thành công vui lòng kiểm tra lại" })
        }
    } catch (error) {
        next(error)
    }
}

const getAllBook = async (req, res,next) => {
    try {
        const books = await Book.find({})

        return res.json(books)

    } catch (error) {
        next(error)
    }
}

const updateBook = async (req, res,next) => {
    try {
        const data = req.body
        if (!data.title) {
            return res.json({ message: "The input is required", type: 'Title' })
        }
        else if (!data.auther) {
            return res.json({ message: "The input is required", type: 'Auther' })
        }
        else if (!data.releaseDate) {
            return res.json({ message: "The input is required", type: 'RelaseDate' })

        }
        const book = await Book.findOne({ _id: req.params.id });

        if (book) {
            const updateBook = await Book.findByIdAndUpdate(book._id, data, { new: true })
            return res.status(200).json({
                status: 'OK',
                message: 'SUCCESS',
                data: updateBook
            })
        } else {
            res.status(404).json({
                status: 'ERROR',
                message: "Book not found",
            });
        }

    } catch (error) {
        next(error)
    }
}

const deteleBook = (async (req, res, next) => {
    try {

        const book = await Book.findById(req.params.id);
        if (book) {
            await book.remove();
            return res.json({ success: true })
        }
        else return res.json({ success: false })
    } catch (error) {
        next(error);
    }
})
const getDetails = (async (req, res, next) => {
    try {
        const book = await Book.findById(req.params.id);
        if (book) {
            return res.json(book)
        }
        else return res.json({ success: false })
    } catch (error) {
        next(error)
    }
})
module.exports = { createBook, getAllBook, updateBook, deteleBook,getDetails }