const { readFile } = require("fs/promises");

async function read() {
  const result = await readFile("./data/first.txt", "utf-8");
  console.log(result);
}

read();
