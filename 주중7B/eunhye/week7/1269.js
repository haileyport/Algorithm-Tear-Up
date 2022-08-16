//대칭 차집합
//1:57~2:05

const fs = require("fs");
const input = fs.readFileSync("text.txt").toString().split("\n");
const info = input
  .shift()
  .split(" ")
  .map((el) => el.trim());
const groupA = input[0].split(" ").map((el) => el.trim());
const groupB = input[1].split(" ").map((el) => el.trim());

//A-B와 B-A의 합집합을 대칭 차집합이라고 함
//A-B, B-A는 여집합

const blankA = new Set(groupA);
const blankB = new Set(groupB);

let ans = 0;

for (i = 0; i < info[0]; i++) {
  blankB.has(groupA[i]) ? ans : ans++;
}

for (i = 0; i < info[1]; i++) {
  blankA.has(groupB[i]) ? ans : ans++;
}

console.log(ans);
