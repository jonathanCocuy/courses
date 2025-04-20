/* const { readFile } = require("fs");

readFile("../data/first.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log("El archivo tiene:", data.length, "letras");
}); */


const { readFile } = require("fs");

readFile("../data/first.txt", "utf-8", (error, data) => {
  if (error) {
    return console.log("Error leyendo el archivo:", error);
  }

  const palabras = data
    .trim() // elimina espacios al inicio y final
    .split(/\s+/); // separa por cualquier espacio, tab, salto de línea, etc.

  console.log("El archivo tiene:", palabras.length, "palabras");
});