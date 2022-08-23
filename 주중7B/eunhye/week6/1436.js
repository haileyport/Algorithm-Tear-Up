// 영화감독 숌

const fs = require("fs");
const raw = fs.readFileSync("./text.txt", "utf8");
let input = Number(raw.trim());

let start = 665;

while (input > 0) {
  //항상 true
  start++; //666부터 체크해야 하니까 플러스

  if (start.toString().includes("666")) {
    //문자열로 바꿨을 때 666을 포함하고 있으면
    input--; //카운트 하나씩 올리기 (input회 - 1)
  }
}

console.log(start);
