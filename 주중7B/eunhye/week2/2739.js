//구구단

const fs = require("fs");
const input = fs.readFileSync("./text.txt").toString().split("\n");
const a = parseInt(input[0]);

for (i = 1; i < 10; i++) {
  console.log(`${a} * ${i} = ${a * i}`);
}
