const express = require("express")
const app = express();

// __Para que se muestren en pantalla las respuestas se crean con las peticiones GET__ //
app.get("/products", (req, res) => {
    res.send("Obtener lista de productos")
})

app.post("/products", (req, res) => {
    res.send("Crear un producto")
})

app.put("/products", (req, res) => {
    res.send("Actualizar un producto")
})

app.patch("/products", (req, res) => {
    res.send("Actualizar una parte del producto")
})

app.delete("/products", (req, res) => {
    res.send("Eliminar un producto")
})

app.listen(3000)
console.log("Server on port", 3000)