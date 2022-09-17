const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const nm = input[0].split(" ").map(Number);
const n = nm[0]; // 듣도 못한 사람의 수
// const m = nm[1]; // 보도 못한 사람의 수

const notHeard = input.slice(1, n + 1); // 듣도 못한 사람의 이름
const notSeen = new Set(input.slice(n + 1)); // 보도 못한 사람의 이름

let count = 0;
let arr = [];
for (const el of notHeard) {
  if (notSeen.has(el)) {
    count++;
    arr.push(el);
  }
}

const result = count + "\n" + arr.sort().join("\n");
console.log(result);
