const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("WELCOME WORLD");
});

app.get("/file", (req, res) => {
  res.sendFile("./hook.jpg", {
    root: __dirname,
  });
});

app.post("/user", (req, res) => {
  res.json({
    name: "Jonathan",
    lastname: "Cocuy",
    age: 23,
    points: [1, 2, 3],
    address: {
      city: "Bogotá",
      street: "Carrera 109A #136B-14",
    },
  });
});

app.get("/isAlive", (req, res) => {
  // Envia un código de respuesta a la petición sin contenido
  res.sendStatus(204);
});

app.listen(3000);
console.log("Server RESPONSE on port", 3000);
