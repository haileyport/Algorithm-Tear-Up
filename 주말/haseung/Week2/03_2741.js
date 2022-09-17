// 입력

// 첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.

// 출력

// 첫째 줄부터 N번째 줄 까지 차례대로 출력한다.

// 예제 입력 1

// 5

// 예제 출력 1

// 1
// 2
// 3
// 4
// 5

const fs = require("fs");
const inputs = fs.readFileSync(0, "utf-8").toString().trim();

let result = Number(inputs);
let answer = "";

for (let i = 1; i <= result; i++) {
  answer += i + "\n";
}

console.log(answer);
