const mongoose = require("mongoose")
const validator = require("validator")

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique:[true,"email already exis"],
        validator(value){
        if(!validator.isEmail(value)){
        throw new Error("invalid email")
        }
        if (!username) {
            return res.status(400).json({ error: "Name is required." });
          }
        }
    },
    password: {
        type: String,
        required: true,
        select: false,
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;