const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let N = Number(input[0]);
let resultArr = [];
let final = [];
let answer = "";

for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    resultArr.push(i);
  }
}

let len = resultArr.length;
while (N !== 1) {
  let smallNum;
  for (let i = 1; i < len; i++) {
    if (N % resultArr[i] === 0) {
      smallNum = resultArr[i];
      break;
    }
  }
  final.push(smallNum);
  while (true) {
    N = N / smallNum;
    if (N % smallNum !== 0) {
      break;
    }
    final.push(smallNum);
  }
}

final.forEach((element) => {
  answer += element + "\n";
});
console.log(answer);
