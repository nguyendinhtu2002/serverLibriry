const express = require("express")
const dotenv = require("dotenv");
const cors = require("cors")
const connectDatabase = require("./config/Mongodb");
const UserRouter = require("./router/User")
const BookRouter = require("./router/Book")
const app = express()

dotenv.config();
connectDatabase();
app.use(cors());
app.use(express.json())



app.use("/api/v1/user",UserRouter)
app.use("/api/v1/book",BookRouter)
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})