/**
 * 통과 여부 : 통과
 * 시간 : 10분
 * 점수 : +11
 * @param {*} n 수
 * @returns 피보나치 수에서 1234567 나눈 나머지
 */
function solution(n) {
  let zero = 0;
  let one = 1;
  let result = [zero, one];
  for (let i = 2; i <= n; i++) {
    result[i] =
      // 힌트 참고
      ((result[i - 1] % 1234567) + (result[i - 2] % 1234567)) % 1234567;
  }
  return result[result.length - 1];
}
