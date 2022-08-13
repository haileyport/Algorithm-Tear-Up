//두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// 입력

// 첫 줄에 테스트케이스의 개수 T가 주어진다. T는 최대 1,000,000이다. 다음 T줄에는 각각 두 정수 A와 B가 주어진다. A와 B는 1 이상, 1,000 이하이다.

// 출력

// 각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력한다.

// 예제 입력 1
// 5
// 1 1
// 12 34
// 5 500
// 40 60
// 1000 1000

// 예제 출력 1

// 2
// 46
// 505
// 100
// 2000

const testCase = require("fs").readFileSync(0, "utf-8").toString().split("\n");

let max = Number(testCase[0]);
let answer = "";

for (let i = 1; i <= max; i++) {
  let numbers = testCase[i].split(" ");
  answer += Number(numbers[0]) + Number(numbers[1]) + "\n";
}

console.log(answer);
