/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.05ms, 33.4MB)
테스트 2 〉	통과 (0.04ms, 33.4MB)
테스트 3 〉	통과 (0.05ms, 33.5MB)
테스트 4 〉	통과 (0.04ms, 33.4MB)
테스트 5 〉	통과 (0.05ms, 33.5MB)
테스트 6 〉	통과 (0.05ms, 33.6MB)
테스트 7 〉	통과 (0.05ms, 33.4MB)
테스트 8 〉	통과 (0.04ms, 33.6MB)
테스트 9 〉	통과 (0.06ms, 33.6MB)
테스트 10 〉	통과 (0.06ms, 33.5MB)
테스트 11 〉	통과 (0.05ms, 33.6MB)
테스트 12 〉	통과 (0.05ms, 33.5MB)
테스트 13 〉	통과 (0.04ms, 33.4MB)
테스트 14 〉	통과 (0.06ms, 33.5MB)
효율성  테스트
테스트 1 〉	통과 (0.08ms, 32.9MB)
테스트 2 〉	통과 (0.05ms, 33.4MB)
테스트 3 〉	통과 (0.04ms, 33.3MB)
테스트 4 〉	통과 (0.05ms, 33.5MB)
테스트 5 〉	통과 (0.06ms, 33.4MB)
테스트 6 〉	통과 (0.07ms, 33MB)
채점 결과
정확성: 70.0
효율성: 30.0
합계: 100.0 / 100.0
 */

function solution(n) {
  const binaryN = n.toString(2);
  let result = (n + 1).toString(2);
  let i = n + 2;
  while (result.split("1").length - 1 !== binaryN.split("1").length - 1) {
    result = i.toString(2);
    i++;
  }
  return parseInt(result, 2);
}

//다른 사람의 풀이
function solution(n, a = n + 1) {
  return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1);
}
