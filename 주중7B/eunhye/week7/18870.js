//좌표압축 - 실버 2

const fs = require("fs");
const raw = fs.readFileSync("text.txt", "utf8");
let input = raw.trim().split("\n");
const count = input.shift();

//좌표 X1, ... Xn
input = input[0].split(" ").map(Number);

//숫자가 가장 작은 것부터 0을 매겨서 리턴
//단 원래의 인덱스를 변경하면 안됨

let obj = {};
let ans = [];

//오름차순 sort
const upper = [...new Set(input)].sort((a, b) => a - b);

//정렬한 input의 idx를 obj에 넣어주기
upper.forEach((item, idx) => (obj[item] = idx));

//input i를 순서대로 넣어주기
for (i = 0; i < input.length; i++) {
  ans.push(obj[input[i]]);
}

console.log(ans.join(" "));
