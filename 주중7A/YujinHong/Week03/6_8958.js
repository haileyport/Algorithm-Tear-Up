// 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다.
// "OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.
// OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.

const input = require("fs")
  .readFileSync("../ex.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 1; i <= input[0]; i++) {
  const oxArr = input[i].split("");
  let score = 0;

  for (let j = 0; j < oxArr.length; j++) {
    if (oxArr[j] === "O") {
      score++;

      for (let k = 1; k <= j; k++) {
        if (oxArr[j - k] === "O") {
          score++;
        } else {
          break;
        }
      }
    }
  }

  console.log(score);
}
