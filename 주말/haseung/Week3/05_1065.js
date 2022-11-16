// 문제
// 어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다. 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 1,000보다 작거나 같은 자연수 N이 주어진다.

// 출력
// 첫째 줄에 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력한다.

// 예제 입력 1
// 110
// 예제 출력 1
// 99
// 예제 입력 2
// 1
// 예제 출력 2
// 1
// 예제 입력 3
// 210
// 예제 출력 3
// 105
// 예제 입력 4
// 1000
// 예제 출력 4
// 144
// 예제 입력 5
// 500
// 예제 출력 5
// 119

const inputs = require("fs").readFileSync(0, "utf-8").toString().trim();

let num = Number(inputs);

const oneNumber = (n) => {
  let count = 0; // 한수의 개수가 얼마인지 카운트하는 변수
  for (let i = 1; i <= n; i++) {
    const hundredNumber = Math.floor((i % 1000) / 100); // 100의 자리
    const tenNumber = Math.floor((i % 100) / 10); // 10의 자리
    const lastNumber = Math.floor(i % 10); // 1의 자리

    if (i < 100) count++; // 100의 자리가 없는 경우
    else if (i >= 100 && i < 1000) {
      // 100의 자리가 있는 수들 중에서
      // 등차수열 키워드를 이용하여 연속된 두 개 수의 차이가 일정하면 count 증가
      if (hundredNumber - tenNumber === tenNumber - lastNumber) count++;
    }
  }
  return count;
};

console.log(oneNumber(1000));
