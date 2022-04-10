require('dotenv').config()
const express = require("express");
const cors= require("cors")
const dbConnect = require('./config/mongo')
const app= express()

app.use(cors())

const PORT= process.env.PORT || 3000

// RUTAS
app.use('/api', require('./routes'))

app.listen(PORT, ()=> {
    console.log(`Servidor escuchando en puerto ${PORT}`);
})

dbConnect()
