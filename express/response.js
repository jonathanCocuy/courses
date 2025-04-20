const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("WELCOME WORLD")
})

app.get("/file", (req, res) => {
    res.sendFile("./hook.jpg", {
        root: __dirname
    })
})

app.get("/user", (req, res) => {
    res.json({name: "Jonathan"})
})

app.listen(3000)
console.log("Server RESPONSE on port", 3000)