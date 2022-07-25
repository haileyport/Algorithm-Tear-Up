// 단어가 주어졌을 때,
// 몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력한다.

let input = require("fs").readFileSync("../ex.txt").toString().trim();

const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (const el of croatia) {
  while (input.includes(el)) {
    input = input.replace(el, "0");
  }
}

console.log(input.length);
