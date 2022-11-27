/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.04ms, 33.4MB)
테스트 2 〉	통과 (0.05ms, 33.5MB)
테스트 3 〉	통과 (0.04ms, 33.4MB)
테스트 4 〉	통과 (0.04ms, 33.4MB)
테스트 5 〉	통과 (0.04ms, 33.4MB)
테스트 6 〉	통과 (0.04ms, 33.5MB)
테스트 7 〉	통과 (0.03ms, 33.4MB)
테스트 8 〉	통과 (0.03ms, 33.5MB)
테스트 9 〉	통과 (0.04ms, 33.4MB)
테스트 10 〉	통과 (0.03ms, 33.4MB)
테스트 11 〉	통과 (0.03ms, 33.4MB)
테스트 12 〉	통과 (0.23ms, 33.6MB)
테스트 13 〉	통과 (0.04ms, 33.5MB)
테스트 14 〉	통과 (0.04ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(a, b, n) {
  let now = n; // 내가 가진 병 개수
  let count = 0; // 지금까지 받은 전체 병 개수
  while (a <= now) {
    const avail = now - (now % a); // 마트에 줄 수 있는 최대 병 개수
    const canGet = (avail * b) / a; // 이번에 마트에서 받을 수 있는 병 개수
    count += canGet;
    now = now - avail + canGet;
  }
  return count;
}
