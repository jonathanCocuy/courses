/* 
?  : Ejecutar código de forma síncrona, significa que si tengo varias funciones tengo que esperar a que esta termine de ejecutarse para poder ejecutar la siguiente
* ASYNC: Ejecutar código de forma asíncrona, significa que si tengo varias funciones pueden ejecutarse al mismo tiempo, sin esperar a que esta termine de ejecutarse
    $ Modulo FS, File System
*/
const fs = require("fs");

/* 
? El método READFILESYNC lee un archivo
    $ Cuando agregamos el utf-8, es para que convierta el resultado de la lectura del archivo a string
    $ Otra forma de convertir el resultado de la lectura del archivo es agregando al final .toString() en vez de el utf-8
*/
console.log(fs.readFileSync("./data/first.txt", "utf-8"));
console.log(fs.readFileSync("./data/second.txt").toString());

/* 
? Este método crea un archivo. Si se vuelve a ejecutar este método, se sobreescribe el contenido que le pasemos en el mismo archivo
*/
const title = "This is a new file";
fs.writeFileSync("./data/newFile.txt", title);

/* 
? El método READFILE lee un archivo (Asincrono)
*/
fs.readFile("./data/newFile.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data);

  fs.writeFile("./data/newFile2.txt", "utf-8", (error, data) => {
    console.log(error);
    console.log(data);

    fs.writeFile("./data/newFile3.txt", "utf-8", (error, data) => {
      console.log(error);
      console.log(data);
    });
  });
});
