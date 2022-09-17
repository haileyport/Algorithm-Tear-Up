// 영어 대소문자와 공백으로 이루어진 문자열이 주어진다.
// 이 문자열에는 몇 개의 단어가 있을까?
// 단, 한 단어가 여러 번 등장하면 등장한 횟수만큼 모두 세어야 한다.

const input = require("fs").readFileSync("../ex.txt").toString().trim();

let result = 0;

// 공백이 아니면
if (input) {
  result = input.split(" ").length;
}

console.log(result);
