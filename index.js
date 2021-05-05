let express = require('express')
let app = express()
let bodyParser = require('body-parser')
require('dotenv').config()
let router = require('./routes/router')



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)




app.listen(process.env.PORT || 8080, () => {
    console.log('Servidor iniciado na porta ' + process.env.PORT || 8080)
})