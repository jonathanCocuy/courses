const express = require("express")
const app = express();


// __Los settings funcionan para dar o cambiar las configuraciones por defecto que tiene express__ //
// __Sirve para que cuando visitemos una ruta especifica se escriba de tal forma como la declaramos en el codigo, en mayúsculas, minúsculas, etc__ //
app.set("case sensitive routing", true)
app.set("appName", "Express Course")
app.set("port", 3000)

app.get("/Hello/hello", (req, res) => {
    res.send("WELCOME TO HELLO")
})

app.listen(app.get("port"), () => {
    console.log(`Server ${app.get("appName")} on port ${app.get("port")}`)
})