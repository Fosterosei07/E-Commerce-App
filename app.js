const express = require('express');
const dotEnv = require('dotenv');
const userRoute = require('./Routes/userRoute');
const dbConnect = require('./Database/dbConnect');
const expressLayouts = require("express-ejs-layouts");
const sequelize  = require('sequelize');
const ejs = require('ejs');




dotEnv.config()

const port = process.env.PORT || 5000

const app = express()

const home = (req,res)=>{
    res.render('')
}

app.listen(port, () => {
    console.log(`server connected on http://localhost:${port}`)
})