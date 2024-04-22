const mongoose = require("mongoose");

//schema
const userSchema = new mongoose.Schema(
    {
        id:{
            type: Number,
            required: true,
            unique : true
        },
        password:{
            type: Number,
            required: true
        }
    },
    {timestamps:true}
);

//model
const User = mongoose.model("user",userSchema);

module.exports = User;