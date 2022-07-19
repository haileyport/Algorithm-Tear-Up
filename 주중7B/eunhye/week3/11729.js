//하노이 탑 이동 순서

const fs = require("fs");
const input = fs.readFileSync("./text.txt").toString();
//input - 원판 수
//하노이 공식 An = 2^n - 1번으로 이동 가능
//이동 루트??
//홀수일 때는 3으로, 짝수일때는 2로 보내서 시작
//to3, to2 함수를 번갈아가면서 사용하면 될 것 같은데

const moveCount = (pan) => {
  return 2 ** pan - 1;
};

const toThree = () => {};

const toTwo = () => {};

const moving = (pan) => {
  if (pan === 1) return 1;
  pan % 2 === 0 ? toTwo() : toThree();
};

const ans = moveCount(Number(input));
console.log(ans);
