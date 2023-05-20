const express = require("express")
const { createBook, getAllBook, getDetails, updateBook, deteleBook } = require("../controller/BookController")
const router = express.Router()

router.post("/addBook", createBook)
router.get("/getAllBook",getAllBook)
router.get("/getBook/:id",getDetails)
router.put("/update/:id",updateBook)
router.delete("/update/:id",deteleBook)
module.exports = router
