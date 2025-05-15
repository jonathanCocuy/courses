const express = require("express");
const colors = require("colors");
const app = express();
const PORT = 3000;

// __Usamos esta función para que antes de que llegue de profile como cortafuegos__ //
app.use((req, res, next) => {
  console.log("Paso por aquí".red, `URL: ${req.url} ---- METHOD: ${req.method}`);

  // __Utilizamos un parametro next, para indicar que puede seguir con la siguiente ruta, sin el, el servidor estará esperando una respuesta para avanzar a la ruta que en este caso es profile__ //
  next();
});

app.get("/profile", (req, res) => {
  setTimeout(() => {
    console.log("ESTAMOS EN PROFILE".green);
    res.send("PROFILE PAGE");
  }, 2000);
});

app.get("/about", (req, res) => {
  setTimeout(() => {
    console.log("ESTAMOS EN ABOUT".green);
    res.send("ABOUT PAGE");
  }, 2000);
});

app.listen(PORT, () => {
  console.log("Server MIDDLEWAR on PORT".cyan, PORT);
});
