const colors = require("colors");
const { readFile } = require("fs");

function logError(error) {
  return "\n--- THIS IS THE ERROR:\n".red + error + "\nFINISH ERROR ---\n".red;
}

function logResponse(res) {
  return "\n--- THIS IS THE DATA:\n".cyan + res.italic.underline + "\n--- FINISH DATA\n".cyan;
}

function getText(pathFile) {
  return new Promise(function (resolve, reject) {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

/*  getText("./data/second.txt")
  .then((result) => console.log(logResponse(result)))
  .catch((err) => console.log(logError(err))); 
*/

/* 
? ASYNC / AWAIT
*/

  async function read () {
    /* 
    ? Form ONE
    */
    /* const result = await getText("./data/first.txt")
    const result2 = await getText("./data/newFile.txt")
    const result3 = await getText("./data/second.txt")
    console.log(logResponse(result))
    console.log(logResponse(result2))
    console.log(logResponse(result3))  */

    /* 
    * Form with ERROR
    */
    try {
      const result = await getText("./data/first.txt")
      const result2 = await getText("./data/newFile.txt")
      const result3 = await getText("./data/second.txt")
      console.log(logResponse(result))

      // Crear un aviso de error y el código que está debajo de el, no se ejecuta
      /* throw new Error("This is a Error") */ 
      console.log(logResponse(result2))
      console.log(logResponse(result3))
    } catch (err) {
      console.log(logError(err))
    }

  }

  read()
