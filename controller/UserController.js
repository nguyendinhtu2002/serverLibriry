const User = require("../model/User")
const { generateToken } = require("../utils/generateToken")


const createUser = async (req, res,next) => {
    try {
        const { username, password, name, phone, email } = req.body

        if (!username || !name || !email || !password) {
            return res.status(400).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const userNew = await User.findOne({ username })
        if (userNew) {
            return res.json({ message: "UserName đã tồn tại" })
        }
        else {
            await User.create({
                name,
                email,
                username,
                phone,
                password,
            });
            return res.json({ message: "Dang ky thanh cong!" })
        }
    } catch (error) {
        next(error)
    }
}

const Login = (async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (user && (await user.matchPassword(password))) {
            return res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                // token: generateToken(user._id),
            });
        } else {
            return res.status(400).json({ error: 'Invalid Email or Password' })
        }
    } catch (error) {
        next(error);
    }
})


module.exports = { Login, createUser }