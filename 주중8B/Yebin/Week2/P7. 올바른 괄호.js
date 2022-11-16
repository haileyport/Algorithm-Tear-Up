/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.04ms, 33.5MB)
테스트 2 〉	통과 (0.04ms, 33.5MB)
테스트 3 〉	통과 (0.04ms, 33.5MB)
테스트 4 〉	통과 (0.04ms, 33.4MB)
테스트 5 〉	통과 (0.04ms, 33.4MB)
테스트 6 〉	통과 (0.04ms, 33.5MB)
테스트 7 〉	통과 (0.05ms, 33.4MB)
테스트 8 〉	통과 (0.05ms, 33.5MB)
테스트 9 〉	통과 (0.12ms, 33.4MB)
테스트 10 〉	통과 (0.04ms, 33.5MB)
테스트 11 〉	통과 (0.05ms, 33.5MB)
테스트 12 〉	통과 (0.14ms, 33.4MB)
테스트 13 〉	통과 (0.12ms, 33.6MB)
테스트 14 〉	통과 (0.13ms, 33.4MB)
테스트 15 〉	통과 (0.13ms, 33.3MB)
테스트 16 〉	통과 (0.12ms, 33.6MB)
테스트 17 〉	통과 (0.13ms, 33.4MB)
테스트 18 〉	통과 (0.04ms, 33.5MB)
효율성  테스트
테스트 1 〉	통과 (2.79ms, 37MB)
테스트 2 〉	통과 (2.53ms, 37.1MB)
채점 결과
정확성: 69.5
효율성: 30.5
합계: 100.0 / 100.0
 */

// 첫 번째 시도
function solution(s) {
  if (s.charAt(0) === ")" || s.charAt(s.length - 1) === "(") return false;
  else if (
    s.split("").filter((el) => el === "(").length ===
    s.split("").filter((el) => el === ")").length
  )
    return true;
  else return false;
}
// '())(()' 와 같은 괄호의 경우 올바르지 않은 괄호이지만 true를 반환하는 문제가 있다.

// 두 번째 시도
function solution(s) {
  if (s.charAt(0) === ")" || s.charAt(s.length - 1) === "(") return false;
  else if (
    s.split("").filter((el) => el === "(").length !==
    s.split("").filter((el) => el === ")").length
  )
    return false;

  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack[0] === "(" && s[i] === ")") stack = stack.slice(1);
    else stack.push(s[i]);
  }
  return stack.length === 0 ? true : false;
}
// 효율성 테스트 1개 실패(시간 초과)

// 세 번째 시도
function solution(s) {
  if (s.charAt(0) === ")" || s.charAt(s.length - 1) === "(") return false;
  let stackCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stackCount++;
    else stackCount--;
    if (stackCount < 0) return false;
  }
  return stackCount === 0 ? true : false;
}
// 굳이 배열로 stack을 쌓을 필요 없이 숫자만 카운팅 해주면 되고
// 여는 괄호보다 닫는 괄호가 먼저 나와서 count가 음수가 되면 false를 리턴해주는 방식
