const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString()
  .trim()
  .split("\n");

const s = input[0];
let str = new Set();

for (let i = 0; i < s.length; i++) {
  for (let j = i; j < s.length; j++) {
    str.add(s.substring(i, j + 1));
  }
}

console.log(str.size);
