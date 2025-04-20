console.log("First");

setTimeout(() => {
  console.log("Second");
}, 3000);

console.log("Third");

const http = require("http");

const SERVER_TEST = http.createServer((req, res) => {
  if (req.url === "/") {
    for (let i = 1; i < 100; i++) {
        console.log
    }
    res.write("Welcome to the server");
    return res.end();
  } else if (req.url === "/about") {
    setTimeout(() => {
      res.write("Welcome to ABOUT");
      return res.end();
    }, 10000);
  } else {
    res.end("Not found");
  }
});

SERVER_TEST.listen(3005);
console.log("SERVER ON PORT 3000");
