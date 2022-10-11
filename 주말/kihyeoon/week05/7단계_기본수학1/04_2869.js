const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "04_2869.txt")
  .toString()
  .split(" ");

const A = input[0]; // 아침에 이동하는 수
const B = input[1]; // 밤에 미끄러지는 수
const V = input[2]; // 높이

console.log(Math.ceil((V - B) / (A - B)));
