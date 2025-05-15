const express = require("express");
const app = express();
const PORT = 3000;

// __Podemos colocar parámetros para que sea pueda utilizar de forma dinámica__ //
app.get("/hello/:user", (req, res) => {
  res.send(`Hello ${req.params.user}`);
  console.log(typeof req.params.user)
});
// __Forma larga de convertir y mostrar suma de parametros de la url__ //
/* 
  app.get("/add/:x/:y", (req, res) => {
    res.send(`Result: ${parseInt(req.params.x) + parseInt(req.params.y)}`)
    console.log(typeof req.params.x)
  }) 
*/

// __Pasamos el req de forma especifica, pero no es recomendado ya que normalmente necesitamos extraer otro tipo de información del req, lo pasamos con dos parametros especificos, X y Y, params es un objeto entonces lo traemos con las llaves {}, asi mismo se trae cada parametro como objeto__ //
app.get("/add/:x/:y", ({params: {x, y}}, res) => {
  const result = parseInt(x) + parseInt(y)
  res.send(`Result: ${result}`)
  console.log(result)
})

app.get("/home", (req, res) => {
  res.sendFile("./public/index.html", {root: __dirname})
})

app.get("/user/:username/photo", (req, res) => {
  if (req.params.username === "Jonathan") {
    return res.sendFile("./hook.jpg", {root: __dirname})
  } 
  res.send("USER INVALID")
})

app.get("/name/:name/age/:age", (req, res) => {
  console.log(req.params)
  res.send(`El usuario es ${req.params.name} tiene ${req.params.age} años`)
  // __PARAMS es un objeto, asi que cualquier dato que tengamos y lo mostremos se mostrara como un objeto__ //
})

app.listen(PORT);
console.log("Server PARAMS on port", PORT);
