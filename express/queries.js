const express = require("express");
const colors = require("colors")
const app = express();

const PORT = 3000;

// __El signo ? lo podemos llamar como Querie o consulta, es informacion extra que el navegador envia al backend para que utilice información __ //
// __Utilizamos el signo & para poder añadir mas variables a la ruta__ //

app.get("/home", (req, res) => {
  res.sendFile("./public/index.html", { root: __dirname });
});

app.get("/query", (req, res) => {
  // __Podemos declarar variables en la ruta y verla por medio del parametro query__ //
  console.log(req.query.last_name); // __Podemos acceder a las variables que marcamos en la ruta para verlas de forma especifica__ //
  res.send(`QUERIES`);
});

// __Si creamos en la ruta dos variables iguales pero con valor diferente express las guarda en una sola variable dentro de un array__ //

app.get("/search", (req, res) => {
  if (req.query.book === "JavaScript-Books") {
    res.send("Lista de libros de JavaScript");
  } else {
    res.send("Página normal");
  }
  console.log(req.query)
});

// __Este método all, sirve para utilizarla con cualquier petición, get, delete, post, etc__ //

app.all("/all", (req, res) => {
    res.send("SERVER ALL")
})

app.listen(PORT);
console.log("Server QUERIES on PORT".magenta , PORT);
