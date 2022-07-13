// 문제: 1-6까지 눈을 가진 3개의 주사위를 던져서 규칙에 따라 상금을 받는 게임 상금 계산 프로그램을 작성 하시오.
// 입력: 첫째 줄에 3개의 눈이 빈칸을 사이에 두고 각각 주어진다.
// 출력: 첫쨰 줄에 게임의 상금을 출력 한다.
// 규칙
// 1. 같은 눈이 3개가 나오면 10,000원 + (같은 눈) x 1,000원의 상금을 받게 된다.
// 2. 같은 눈이 2개만 나오면 1,000원 + (같은 눈) x 100원의 상금을 받게 된다.
// 3. 모두 다른 눈이 나오면 (가장 큰 눈)x 100원의 상금을 받게 된다.
// 의사코드
// 1. fs 모듈을 사용해서 3개의 수를 요소로 같는 배열을 입력 받습니다.
// 2. 세개의 요소가 동일한 경우, 10000 + 같은 수 * 1000 을 출력합니다.
// 3. 두개의 요소가 동일한 경우, 1000 + 같은 수 * 100 을 출력합니다.
// 4. 같은 요소가 없는 경우, 가장 큰 요소 * 100 을 출력합니다.

const fs = require("fs");
const numbers = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// const numbers = [6, 2, 5];

let countFor = 0;
let count = 1;
let maxNumber = numbers[0];
let sameNumber;

// <number[0] 비교연산자 number[1], numbers[0] 비교연산자 number[2], number[1] 비교연산자 number[2]> 총 세번 비교 합니다.
for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[i] === numbers[j]) {
      sameNumber = numbers[i];
      count++;
    }
    if (maxNumber < numbers[i]) maxNumber = numbers[i];
    if (maxNumber < numbers[j]) maxNumber = numbers[j];
    // countFor++;
  }
}

// console.log(countFor, count, maxNumber, sameNumber);

if (count === 4) {
  console.log(10000 + sameNumber * 1000);
} else if (count === 2) {
  console.log(1000 + sameNumber * 100);
} else if (count === 1) {
  console.log(maxNumber * 100);
}
