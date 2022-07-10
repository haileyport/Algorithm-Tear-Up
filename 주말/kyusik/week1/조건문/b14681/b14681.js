/*
첫 줄에는 정수 x가 주어진다. (−1000 ≤ x ≤ 1000; x ≠ 0) 다음 줄에는 정수 y가 주어진다. (−1000 ≤ y ≤ 1000; y ≠ 0)
점 (x, y)의 사분면 번호(1, 2, 3, 4 중 하나)를 출력한다.
*/
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
// 백준에 제출할때 바로 위의 filePath를 0으로 바꿔야 런타임에러가 안뜬다. 이유는 모르겠다. 다만 이번 문제는 fs 모듈 사용시 런타임에러가 뜨므로 위의 방법으로 해결하거나 readline을 써야한다는듯.

if (input[0] > 0 && input[1] > 0) {
    console.log(1)
} else if (input[0] < 0 && input[1] > 0) {
    console.log(2)
} else if (input[0] < 0 && input[1] < 0) {
    console.log(3)
} else if (input[0] > 0 && input[1] < 0) {
    console.log(4)
}

/*
readline 썼을때의 답안
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  ///////////////////////////////
  const x = input[0];
  const y = input[1];

  if (x > 0 && y > 0) {
    console.log(1);
  } else if (x < 0 && y > 0) {
    console.log(2);
  } else if (x < 0 && y < 0) {
    console.log(3);
  } else if (x > 0 && y < 0) {
    console.log(4);
  }
  /////////////////////////////
  process.exit();
});
*/