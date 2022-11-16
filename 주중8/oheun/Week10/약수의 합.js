/*
통과 여부 : 통과
점수 : +3
시간 : 30분

테스트 1 〉	통과 (0.07ms, 33.4MB)
테스트 2 〉	통과 (0.14ms, 33.4MB)
테스트 3 〉	통과 (0.35ms, 33.4MB)
테스트 4 〉	통과 (0.19ms, 33.5MB)
테스트 5 〉	통과 (0.47ms, 33.5MB)
테스트 6 〉	통과 (0.19ms, 33.5MB)
테스트 7 〉	통과 (0.65ms, 33.5MB)
테스트 8 〉	통과 (0.19ms, 33.4MB)
테스트 9 〉	통과 (0.32ms, 33.4MB)
테스트 10 〉통과 (0.39ms, 33.5MB)
테스트 11 〉통과 (0.29ms, 33.4MB)
테스트 12 〉통과 (0.35ms, 33.4MB)
테스트 13 〉통과 (0.23ms, 33.5MB)
테스트 14 〉통과 (0.60ms, 33.5MB)
테스트 15 〉통과 (0.34ms, 33.6MB)
테스트 16 〉통과 (0.05ms, 33.4MB)
테스트 17 〉통과 (0.76ms, 33.4MB)
*/

/**약수의 합 문제를 풀어보자
 * @todo 약수의 합을 구해야 한다
 * @return {number} 약수의 합
 */
function solution(n) {
  // new 쓰면 에러
  let answer = 0;
  let numArr = Array.from({ length: n }, (v, i) => i + 1);
  // 틀린 이유? 시간이 너무 오래 걸려서 test16에서 막힌 듯
  // return numArr.filter(divisor => n%divisor===0).reduce((a, b) => a+b)
  numArr.forEach((divisor) => {
    if (n % divisor === 0) {
      answer += divisor;
    }
  });
  return answer;
}
