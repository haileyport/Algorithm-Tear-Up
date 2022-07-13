const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let n = parseInt(input[0]);

for (let i = 1; i <= 9; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
}
