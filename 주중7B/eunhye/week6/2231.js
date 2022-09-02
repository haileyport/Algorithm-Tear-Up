//분해합
//백준 통과 문제 있음

const fs = require("fs");
const raw = fs.readFileSync("./text.txt", "utf8");
const input = Number(raw.trim()); //숫자로 변환

let ans = 0;

while (ans < input) {
  let plus = 0;
  let str = String(ans); //한자리씩 가져오기 위해 문자로 변환
  for (i = 0; i < str.length; i++) {
    //문자 길이만큼
    plus += Number(str[i]); //각 자릿수를 더해줌
  }
  plus += ans; //원본인 ans값까지 더해줌
  if (plus === input) {
    //그 값인 plus가 input과 동일하면
    console.log(ans); //정답
    break;
  } else {
    ans++; //아니면 ans를 1씩 증가
  }
}
