const {adminControllers} = require ('../Controller')
const express = require ('express');

const app = express.Router()

app.get('/', adminControllers.index)

module.exports= app;