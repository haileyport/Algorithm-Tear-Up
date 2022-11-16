const testCase = require("fs").readFileSync(0, "utf-8").toString().split("\n");

//testCase[0]는 처음에 입력한 값인 5(예시)

for (let i = 1; i <= testCase[0]; i++) {
  // testCase[0]만큼 for문으로 반복
  // 1 1
  // 2 3
  // 3 4
  // 9 8
  // 5 2
  let result = testCase[i].split(" "); // 공백 한칸으로 구분

  let num1 = Number(result[0]);
  let num2 = Number(result[1]);

  console.log(`Case #${i}: ${num1} + ${num2} = ${num1 + num2}`);
}
