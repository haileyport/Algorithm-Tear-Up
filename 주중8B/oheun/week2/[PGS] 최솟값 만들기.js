/**
 * 통과 여부
 * 시간 : 15분
 * 점수 : +3
 * 아 최소..

*/

function solution(A, B) {
  let sortedA = A.sort((a, b) => a - b);
  let sortedB = B.sort((a, b) => b - a);

  return sortedA.reduce((acc, cur, idx) => {
    return (acc += cur * sortedB[idx]);
  }, 0);
}

let output = solution([1, 4, 2], [5, 4, 4]);
console.log(output);

/**
 * 정확성 테스트
테스트 1 〉	통과 (0.05ms, 33.5MB)
테스트 2 〉	통과 (0.17ms, 33.5MB)
테스트 3 〉	통과 (0.17ms, 33.5MB)
테스트 4 〉	통과 (0.27ms, 33.4MB)
테스트 5 〉	통과 (0.24ms, 33.5MB)
테스트 6 〉	통과 (0.18ms, 33.5MB)
테스트 7 〉	통과 (0.20ms, 33.6MB)
테스트 8 〉	통과 (0.18ms, 33.5MB)
테스트 9 〉	통과 (0.19ms, 33.4MB)
테스트 10 〉	통과 (0.17ms, 33.5MB)
테스트 11 〉	통과 (0.25ms, 33.5MB)
테스트 12 〉	통과 (0.16ms, 33.5MB)
테스트 13 〉	통과 (0.19ms, 33.6MB)
테스트 14 〉	통과 (0.16ms, 33.4MB)
테스트 15 〉	통과 (0.24ms, 33.4MB)
테스트 16 〉	통과 (0.15ms, 33.5MB)
 * 효율성 테스트

테스트 1 〉	통과 (0.66ms, 33.6MB)
테스트 2 〉	통과 (0.80ms, 33.4MB)
테스트 3 〉	통과 (0.71ms, 33.5MB)
테스트 4 〉	통과 (0.73ms, 33.5MB)
 */
