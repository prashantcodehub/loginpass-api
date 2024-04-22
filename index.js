const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Joi = require('joi');
// const {idsPass} = require("./loginapi/model/user");
const userRouter = require("./loginapi/routes/user")

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connection with mongoose
mongoose.connect("mongodb://127.0.0.1:27017/user-id-password")
.then( () =>console.log("mongoDB connected") )
.catch( error => console.log('connection failed ',error) )

//routs
app.use('/user',userRouter);
 
const port = process.env.PORT || 3004;
app.listen(port, ()=> console.log(`listning at port no. ${port}`));