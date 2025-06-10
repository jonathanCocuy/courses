const express = require("express");
const morgan =  require("morgan")
const colors = require("colors");
const app = express();
const PORT = 3000;

// __Usamos esta función para que antes de que llegue de profile como cortafuegos__ //
app.use((req, res, next) => {
  console.log("Paso por aquí".red, `URL: ${req.url} ---- METHOD: ${req.method}`);

  // __Utilizamos un parametro next, para indicar que puede seguir con la siguiente ruta, sin el, el servidor estará esperando una respuesta para avanzar a la ruta que en este caso es profile__ //
  next();
});

app.get("/about", (req, res) => {
  setTimeout(() => {
    console.log("ESTAMOS EN ABOUT".green);
    res.send("ABOUT PAGE");
  }, 2000);
});

// __Evita el acceso al dashboard hasta que se complete la validación del QUERY, colocamos el middleware después de las demás rutas para que solo afecte a las siguientes, sin interferir con las rutas anteriores__ //

app.use((req, res, next) => {
  if (req.query.login === "jonathan") {
    next()
  } else {
    res.send("NO AUTORIZADO")
  }
})

app.get("/dashboard", (req, res) => {
  console.log("ESTAMOS EN DASHBOARD".green);
  res.send("DASHBOARD PAGE");
});

app.listen(PORT, () => {
  console.log("Server MIDDLEWARE on PORT".cyan, PORT);
});
