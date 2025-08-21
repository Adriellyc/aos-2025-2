const express = require("express")
const app = express()


const PORT = process.env.PORT ? process.env.PORT : "8080"
const HOST = process.env.HOST ? process.env.HOST : "localhost"

app.get("/", (req, res)=>{
    res.send("Bem-vindo ao Express de Adrielly.")
})

app.get("/teste", (req, res)=>{
    res.send("Testando")
})

app.listen(PORT, ()=>{
    console.log(`Server running in https://${HOST}:${PORT}/`)
})