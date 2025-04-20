/*
const http = require("http");
const fs = require("fs")

const SERVER = http.createServer((req, res) => {
  // __Utilizamos para mostrar el archivo de HTML con NODE__ //
  const read = fs.createReadStream("./public/index.html");
  read.pipe(res);
});

SERVER.listen(3000);
console.log("Server on port", 3000); 
*/

/* 
? Utilizar archivo html para mostrarlo en respuesta del servidor con EXPRESS JS
*/

const express = require("express");
const app = express();
 
app.get("/", (req, res) => {
  /* 
  // __Utilizamos para mostrar el archivo de HTML con EXPRESS__ //
  res.sendFile("./public/index.html", { root: __dirname,}); 
  */

  /* res.end("Text with END (NODE)"); */
  res.send("<h1>Text with SEND (EXPRESS)</h1>")
});

app.get("/about", (req, res) => {
  res.send("<h1>THIS IS ABOUT</h1>")
})

app.get("/weather", (req, res) => {
  res.send("The current weather is NICE!")
})

// __Cuando una ruta no es encontrada, se muestra esto__ //
app.use((req, res) => {
  // __Forma sencilla de mostrar un mensaje__ //
  /* res.send("Not Found") */

  // __Forma con el status y el mensaje__ //
  res.status(404).send(`Not Found ${404}`)
})

const PORT = 3000;

app.listen(PORT);
console.log(`Server on port`, PORT);
