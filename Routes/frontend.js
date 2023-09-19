const exxpress = require('express')
const app = exxpress.Router()

app.get('/', (req, res) => {
    res.send('hello')
})

module.exports=app