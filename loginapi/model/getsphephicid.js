const mongoose = require("mongoose");

//schema
const sphephicid = new mongoose.Schema(
    {
        id:{
            type: Number,
            required: true,
            // unique : true
        }
    }
);

//model
const Getsphephicid = mongoose.model("ids",sphephicid);

module.exports = Getsphephicid;