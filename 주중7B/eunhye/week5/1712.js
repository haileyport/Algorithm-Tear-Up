//손익분기점

const fs = require("fs");
const raw = fs.readFileSync("./text.txt", "utf8");
const input = raw.trim().split(" ").map(Number);

//고정비 A 가변비 B
//책정가격 C

//생산대수를 늘리다보면 C*n>A+B가 됨
//해당 n은?

const setting = input[0];
const changed = input[1];
const selling = input[2];

let n; //수량

//애초에 판매가가 더 싸면 마진 안 나오기 때문에 if 처리
if (selling - changed <= 0) {
  n = -1;
} else {
  //판매 - 소모 값이 마진값
  //고정비 = 마진값*수량 이면 손익분기점
  //고정비/마진값 = 수량
  //Math.floor로 수를 내림 했으므로 +1
  n = Math.floor(setting / (selling - changed)) + 1;
}

console.log(n);
