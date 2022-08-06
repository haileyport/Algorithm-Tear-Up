//사분면 고르기

const fs = require("fs");
const input = fs.readFileSync("./../text.txt").toString().split("\n");
const a = parseInt(input[0]);
const b = parseInt(input[1]);

if (a > 0) {
  //+, ?
  if (b > 0) {
    //+, +
    console.log(1);
  } else {
    //+, -
    console.log(4);
  }
} else if (b > 0) {
  //-, +
  console.log(2);
} else {
  //-, -
  console.log(3);
}

//BOJ fs 모듈 문제로 재작성한 코드

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input2 = [];

rl.on("line", function (line) {
  input2.push(parseInt(line));
}).on("close", function () {
  const a = input2[0];
  const b = input2[1];

  if (a > 0) {
    if (b > 0) {
      console.log(1);
    } else {
      console.log(4);
    }
  } else if (b > 0) {
    console.log(2);
  } else {
    console.log(3);
  }
});
