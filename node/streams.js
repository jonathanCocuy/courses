const { writeFile } =  require("fs/promises")

async function createBigFile () {
    await writeFile("./data/bigFile.txt", "Hello World".repeat(1000))
}

createBigFile()

const { createReadStream } = require("fs")

const stream = createReadStream("./data/bigFile.txt", "utf-8")
stream.on("data", (chunk) => {
    console.log(chunk)
} )

stream.on("end", () => {
    console.log("YA TERMINE DE LEER EL ARCHIVO")
})