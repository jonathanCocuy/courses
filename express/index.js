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
  res.send("Text with SEND (EXPRESS)")
});

const PORT = 3000;

app.listen(PORT);
console.log(`Server on port`, PORT);
