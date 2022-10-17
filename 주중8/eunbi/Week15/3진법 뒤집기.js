//[PGS] 같은 숫자는 싫어, +2

// 테스트 1 〉	통과 (0.05ms, 33.5MB)
// 테스트 2 〉	통과 (0.05ms, 33.4MB)
// 테스트 3 〉	통과 (0.03ms, 33.4MB)
// 테스트 4 〉	통과 (0.03ms, 33.4MB)
// 테스트 5 〉	통과 (0.03ms, 33.5MB)
// 테스트 6 〉	통과 (0.03ms, 33.5MB)
// 테스트 7 〉	통과 (0.04ms, 33.4MB)
// 테스트 8 〉	통과 (0.03ms, 33.5MB)
// 테스트 9 〉	통과 (0.04ms, 33.4MB)
// 테스트 10 〉	통과 (0.06ms, 33.4MB)

function solution(n) {
  // toString을 이용해 3진수로 변경 후 reverse 메서드 이용
  let num = [...(n.toString(3))].reverse().join('');
  return parseInt(num, 3); // parseInt(변경하려는 수, 변경하려는 수의 진법)
}