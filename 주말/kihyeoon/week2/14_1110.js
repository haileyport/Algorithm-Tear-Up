let input = Number(require("fs").readFileSync("/dev/stdin").toString());

let num = input;
let sum;
let i = 0;

while (true) {
  i++;

  sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);

  if (input === num) {
    break;
  }
}

console.log(i);

/*
출력 값 잘 나오지만 어떤 이유인지 백준 테스트 통과가 안됨

let input = require("fs").readFileSync("14_1110.txt").toString();

const numStr = input.padStart(2, 0);
let numInt = Number(input);

let newNum = numStr[0] + numStr[1]; // 26 -> 68
let result = ""; // 08

let i = 0;
while (true) {
  i++;
  result = String(Number(newNum[0]) + Number(newNum[1])).padStart(2, 0);
  newNum = newNum[1] + result[1];
  if (numInt === Number(newNum)) {
    break;
  }
}

console.log(i);

input이 한자리수면 뒤에 0을 붙인다
input을 newNum에 할당하고 각 자리의 숫자를 더하고 합계를 result에 할당
result의 뒷 자리 수와 기존 수의 뒷 자리 수를 더해서 newNum에 넣는다
newNum의 앞자리와 뒷자리를 더하고 합계를 result에 다시 넣는다 1
newNum의 뒷 자리 수와 result의 뒷 자리 수를 합쳐서 다시 newNum에 할당 1
newNum의 앞자리와 뒷자리를 더하고 합계를 result에 다시 넣는다 2
newNum의 뒷 자리 수와 result의 뒷 자리 수를 합쳐서 다시 newNum에 할당 2
위에 단계를 반복하면서 newNum이 numInt와 같아지는 시점에 종료한다.
*/
