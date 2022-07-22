// 1에서부터 6까지의 눈을 가진 3개의 주사위를 던져서 다음과 같은 규칙에 따라 상금을 받는 게임이 있다.
// 1. 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다.
// 2. 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다.
// 3. 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.
// 3개 주사위의 나온 눈이 주어질 때, 상금을 계산하는 프로그램을 작성 하시오.

const fs = require("fs");
const input = fs.readFileSync("../예제.txt").toString().trim().split(" ");

let dice1 = Number(input[0]);
let dice2 = Number(input[1]);
let dice3 = Number(input[2]);

if (dice1 === dice2 && dice1 === dice3 && dice2 === dice3) {
  console.log(10000 + dice1 * 1000);
} else if (dice1 === dice2 || dice1 === dice3 || dice2 === dice3) {
  if (dice1 === dice2) {
    console.log(1000 + dice1 * 100);
  } else if (dice1 === dice3) {
    console.log(1000 + dice1 * 100);
  } else {
    console.log(1000 + dice2 * 100);
  }
} else {
  console.log(Math.max(dice1, dice2, dice3) * 100);
}
