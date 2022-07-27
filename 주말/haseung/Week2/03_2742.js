const fs = require("fs");
const inputs = fs.readFileSync(0, "utf-8").toString().trim();

let result = Number(inputs);
let answer = "";

for (let i = result; i >= 1; i--) {
  answer += i + "\n";
}

console.log(answer);
