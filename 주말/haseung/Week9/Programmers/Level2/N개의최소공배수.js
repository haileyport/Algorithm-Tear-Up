// 두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다.
//예를 들어 2와 7의 최소공배수는 14가 됩니다.
//정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다.
//n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.

function solution(arr) {
  let answer = 0;
  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };

  const lcm = (a, b) => (a * b) / gcd(a, b);
  answer = arr.reduce((acc, cur) => lcm(acc, cur));
}

console.log(solution([2, 6, 8, 14]));
