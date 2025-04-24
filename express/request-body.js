const express = require("express")
const app = express()

// Este método de express se utiliza para que pueda leer la petición que se realiza y así se pueda ver el mensaje que recibe la petición POST
// De acuerdo a lo que este enviando desde la petición puedo convertirlo para que se pueda reflejar
// Desde donde envio la petición, puedo enviarla de diferentes formas, texto o json, de acuerdo a eso lo cambio en el express.text() o .json()
app.use(express.json())

app.post("/user", (req, res) => {
    // Si hago una petición, la respuesta de esta se verá de la siguiente manera
    console.log(req.body)
    res.send("New user created")
})

app.listen(3000)
console.log("Server REQUEST-BODY on port", 3000)