//크로아티아 알파벳

const fs = require("fs");
const raw = fs.readFileSync("./text.txt", "utf8");
let input = raw.trim();

//아래 목록은 전부 1글자
const croatia = ["dz=", "lj", "nj", "c=", "c-", "d-", "s=", "z="];

for (i = 0; i < croatia.length; i++) {
  const regex = new RegExp(`${croatia[i]}`, "g");
  input = input.replace(regex, "A");
}

console.log(input.length);
