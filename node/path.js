const path = require("path");

/* 
? Verifica y da una ruta valida según sistema operativo (path.join)
*/
const filePath = path.join("public", "dist", "styles", "main.css");

/* 
? El BASENAME me trae el archivo base de toda la url
*/
console.log(path.basename(filePath));

/* 
? El DIRNAME me trae la ruta de los directorios sin el archivo base
*/
console.log(path.dirname(filePath));

/* 
? El PARSE me trae la información de la ruta del archivo en formato de un objeto
*/
console.log(path.parse(filePath));

/* 
? El RESOLVE es una alternativa de JOIN la cual si le doy el nombre de una carpeta o archivo autocompleta la ruta de acuerdo a donde esta el proyecto
*/
console.log(path.resolve("games"));
