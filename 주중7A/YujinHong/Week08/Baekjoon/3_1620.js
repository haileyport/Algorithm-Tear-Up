const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const nm = input[0].split(" ").map(Number);
const n = nm[0]; // 포켓몬의 개수
// const m = nm[1]; // 내가 맞춰야 하는 문제의 개수

let arr = input.slice(1, n + 1);
const mapArr = new Map(arr.map((v, i) => [v, i])); // 포켓몬
const myArr = input.slice(n + 1); // 내가 맞춰야 하는 문제

let result = [];
for (let el of myArr) {
  // 문자가 들어왔으면 그 포켓몬의 이름에 해당하는 번호를 출력하면 돼.
  if (isNaN(Number(el))) result.push(mapArr.get(el) + 1);
  // 입력으로 숫자가 들어왔다면 그 숫자에 해당하는 포켓몬의 이름을,
  else result.push(arr[el - 1]);
}

console.log(result.join("\n"));
