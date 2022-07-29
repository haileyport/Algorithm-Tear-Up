// ⚡
// 알파벳 대소문자로 된 단어가 주어지면,
// 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성
// 단, 대문자와 소문자를 구분하지 않는다.

const input = require("fs")
  .readFileSync("../ex.txt")
  .toString()
  .trim()
  .toUpperCase();

const charArr = input.split("");

const countObj = {};

for (const el of charArr) {
  // countObj 안에 el 있으면 count 1 증가
  if (el in countObj) {
    countObj[el]++;
    // 없으면 count 1로 초기화
  } else {
    countObj[el] = 1;
  }
}

let max = 0;
let maxChar = "";

for (const el in countObj) {
  if (countObj[el] > max) {
    max = countObj[el];
    maxChar = el;
  } else if (countObj[el] === max) {
    max = countObj[el];
    maxChar = "?";
  }
}

console.log(maxChar);
