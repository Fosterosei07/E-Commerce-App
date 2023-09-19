const express = require('express');
const dotEnv = require('dotenv');
const {adminRoute , frontendRoute}= require('./Routes')
const expressEjsLayouts = require('express-ejs-layouts');


// configure .env
dotEnv.config()

const port = process.env.PORT || 000

const app = express()

// serving static files
app.use(express.static(__dirname+'/public'))

//settting view engines and layouts
app.set('view', 'ejs');
app.use(expressEjsLayouts);



app.use('/admin',adminRoute)
app.use('/', frontendRoute)

const startServer =async() =>{
try{
    app.listen(port, () => {
        console.log(`server connected on http://localhost:${port}`)
    })
} catch(error){
        console.log(Error);
    }
}

startServer()























// const userRoute = require('./Routes/userRoute');
// const dbConnect = require('./Database/dbConnect');
// const expressLayouts = require("express-ejs-layouts");
// const sequelize  = require('sequelize');
// const ejs = require('ejs');