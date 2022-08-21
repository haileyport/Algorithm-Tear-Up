//별찍기 - 10

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const num = parseInt(input[0]);

const lines = [];

printStars(num);
console.log(lines.join(""));

function printStars(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      star(i, j, num);
    }
    lines.push("\n");
  }
}

function star(i, j, num) {
  if (i % 3 == 1 && j % 3 == 1) {
    // (1,1), (1,4), (1,7)...
    lines.push(" ");
  } else {
    if (num == 1) {
      lines.push("*");
    } else {
      // (3,3) = (1,1)이 되고,
      // (3,4) = (1,1)이 된다.
      // (9,9), (27,27)도 동일한 방식으로 재귀 호출된다.
      star(parseInt(i / 3), parseInt(j / 3), parseInt(num / 3));
    }
  }
}
