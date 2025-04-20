/* 
? Most common global objects 
*/
/* console.log("Este es el FILE NAME", __filename);
console.log("Este es el DIR NAME", __dirname);
console.log("Este es el MODULE", module); */
console.log("Require", require);
/* console.log(process); */

const http = require("http");

const SERVER = http.createServer((req, res) => {
    const REQUEST = req.url
  if (REQUEST === "/chicago") {
    res.write("WELCOME TO CHICAGO");
    return res.end();
  }

  if (REQUEST === "/") {
    res.write ("WELCOME YOUR FAVORITE PAGE, AND UNBELIABEBLE WORLD")
    return res.end()
  }
});

/* exports: { SERVER } */
SERVER.listen(3001);
