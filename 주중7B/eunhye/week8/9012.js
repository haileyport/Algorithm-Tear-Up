//괄호

//(와 )로만 구성된 문자열
//괄호 모양이 올바르면 바닐라 문자열(VPS)
//한 쌍 안에 문자가 있는 것도 VPS

//VPS인지 판단해라

const fs = require("fs");
const input = fs
  .readFileSync("text.txt")
  .toString()
  .split("\n")
  .map((el) => el.trim());
const info = input.shift();

let ans = "";

for (k = 0; k < Number(info); k++) {
  let result = "YES";
  const parenthesis = [];
  const el = input[k];
  for (i = 0; i < el.length; i++) {
    if (el[i] === "(") {
      parenthesis.push(1);
    } else if (parenthesis.pop() === undefined) {
      result = `NO`;
    }
  }
  if (parenthesis.length !== 0) result = "NO";
  ans += `${result}\n`;
}

console.log(ans);

//forEach 쓰면 통과 안됨 ㅠ
//for >> 동기 방식: 에러 나면 동작 안함
//forEach >> 비동기 방식: 에러 나도 동작 수행, 원하는 순서와 다르게 프로그램 동작

//성능은 forEach문이 더 좋은데 데이터가 읽기 전용이기 때문에 수정이 불가능하다.

//ref: https://velog.io/@bacccine/for%EC%99%80-foreach%EC%9D%98-%EC%B0%A8%EC%9D%B4
