/*
통과 여부 : 통과
시간 : 5분
점수 : +2

테스트 1 〉	통과 (0.04ms, 33.4MB)
테스트 2 〉	통과 (0.03ms, 33.4MB)
테스트 3 〉	통과 (0.04ms, 33.4MB)
테스트 4 〉	통과 (0.03ms, 33.4MB)
테스트 5 〉	통과 (0.05ms, 33.4MB)
테스트 6 〉	통과 (0.03ms, 33.5MB)
테스트 7 〉	통과 (0.03ms, 33.5MB)
테스트 8 〉	통과 (0.04ms, 33.5MB)
테스트 9 〉	통과 (0.03ms, 33.4MB)
테스트 10 〉통과 (0.03ms, 33.5MB)
*/
function solution(n) {
  // [...n] 알려주셨는데 또 까먹었다
  let number = n.toString(3).split("").reverse().join("");
  let parsing = parseInt(number, 3);
  return parsing;
}
