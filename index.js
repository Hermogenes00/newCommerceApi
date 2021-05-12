let express = require('express')
let app = express()
require('dotenv').config()
let router = require('./routes/router')



app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(router)


app.listen(process.env.PORT || 8080, () => {
    console.log('Servidor iniciado na porta ' + process.env.PORT || 8080)
})