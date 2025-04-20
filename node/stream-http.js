const http = require("http")
const { createReadStream } = require("fs")

const SERVER = http.createServer((req, res) => {
    const fileStream  =  createReadStream("./data/first.txt", {
        encoding: "utf-8"
    })

    fileStream.pipe(res)
    

    fileStream.on("error", error => {
        console.log(error)
    })
})

SERVER.listen(3000)
console.log("SERVER ON PORT 3000")