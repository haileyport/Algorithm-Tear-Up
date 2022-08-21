//알파벳 찾기

const fs = require("fs");
const input = fs.readFileSync("./text.txt").toString();

const alphabet = "abcdefghijklmnopqrstuvwxyz";

let ans = "";

for (i = 0; i < alphabet.length; i++) {
  const index = input.indexOf(alphabet[i]);
  ans += `${index} `;
}
console.log(ans);
