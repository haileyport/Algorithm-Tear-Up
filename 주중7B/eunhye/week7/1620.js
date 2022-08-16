//나는야 포켓몬 마스터 이다솜

const fs = require("fs");
const input = fs
  .readFileSync("text.txt")
  .toString()
  .split("\n")
  .map((el) => el.trim());
let info = input.shift(); //포켓몬의 수, 내가 맞춰야 하는 문제 수 M
info = info.split(" ").map(Number);

const poketmon = new Map();
const poketNum = new Map();
for (i = 0; i < info[0]; i++) {
  poketmon.set(i + 1, input[i]);
  poketNum.set(input[i], i + 1);
}

const quiz = input.slice(info[0]);
let answer = [];

quiz.forEach((el) => {
  if (isNaN(el)) {
    //string일때
    answer.push(poketNum.get(el));
  } else {
    answer.push(poketmon.get(+el));
  }
});
console.log(answer.join("\n"));

//input[info[0]-1]까지 한 줄에 포켓몬 하나씩 들어옴
//그 다음 info[1]개 줄에 문제가 들어오고
//문제가 알파벳 > 포켓몬 번호
//문제가 숫자 > 포켓몬 문자
//MAP 함수로 정의
