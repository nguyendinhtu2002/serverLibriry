const express = require("express")
const { Login, createUser } = require("../controller/UserController")
const router = express.Router()

router.post("/register", createUser)
router.post("/login", Login)


module.exports = router
