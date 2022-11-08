/**
 * 통과 여부 : O
 * 시간 : 10분
 * 점수 : +7
 */

/*
[문제]
두 배열이 주어질 때 두 배열에서 각각 곱해서 더한 누적값이 최소가 되는 숫자.
*/

function solution(a, b) {
  let sortedA = a.sort((a, b) => a - b);
  let sortedB = b.sort((a, b) => b - a);

  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    sum += sortedA[i] * sortedB[i];
  }
  return sum;
}

const a = [1, 2];
const b = [3, 4];
console.log(solution(a, b));
