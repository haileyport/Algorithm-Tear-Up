//두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

//첫째 줄에 A와 B가 주어진다. (0 < A,B < 1010000)

//첫째 줄에 A+B를 출력한다.

// 예제 입력 1
// 9223372036854775807 9223372036854775808
// 예제 출력 1
// 18446744073709551615

const inputs = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

const A = BigInt(inputs[0]);
const B = BigInt(inputs[1]);

console.log(A + B);
