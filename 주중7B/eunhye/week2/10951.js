//A+B - 5

const fs = require("fs");
const input = fs.readFileSync("./text.txt").toString().split("\n");

let ans = "";
let i = 1;

while (i < input.length) {
  try {
    for (i = 0; i < input.length - 1; i++) {
      const num = input[i].split(" ").map(Number);
      ans += `${num[0] + num[1]}\n`;
    }
    i++;
  } catch {
    break;
  }
}
console.log(ans);
