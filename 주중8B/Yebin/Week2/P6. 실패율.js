/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.28ms, 33.5MB)
테스트 2 〉	통과 (0.46ms, 33.5MB)
테스트 3 〉	통과 (53.77ms, 36.1MB)
테스트 4 〉	통과 (257.96ms, 38.3MB)
테스트 5 〉	통과 (1141.41ms, 42.1MB)
테스트 6 〉	통과 (2.19ms, 35.3MB)
테스트 7 〉	통과 (12.31ms, 35.8MB)
테스트 8 〉	통과 (275.57ms, 38.2MB)
테스트 9 〉	통과 (1072.06ms, 42.1MB)
테스트 10 〉	통과 (106.55ms, 38MB)
테스트 11 〉	통과 (277.61ms, 38.3MB)
테스트 12 〉	통과 (187.39ms, 38.7MB)
테스트 13 〉	통과 (405.52ms, 39.3MB)
테스트 14 〉	통과 (0.29ms, 33.4MB)
테스트 15 〉	통과 (12.91ms, 37.1MB)
테스트 16 〉	통과 (6.74ms, 37.6MB)
테스트 17 〉	통과 (15.49ms, 37.4MB)
테스트 18 〉	통과 (7.10ms, 37.6MB)
테스트 19 〉	통과 (4.00ms, 35.5MB)
테스트 20 〉	통과 (12.22ms, 38.4MB)
테스트 21 〉	통과 (19.95ms, 37.9MB)
테스트 22 〉	통과 (1119.34ms, 45.2MB)
테스트 23 〉	통과 (22.81ms, 43.4MB)
테스트 24 〉	통과 (58.03ms, 40.3MB)
테스트 25 〉	통과 (0.14ms, 33.5MB)
테스트 26 〉	통과 (0.12ms, 33.5MB)
테스트 27 〉	통과 (0.12ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(N, stages) {
  // 스테이지 숫자가 담긴 배열 [1, 2, 3, 4, 5]
  const stageNumbers = Array.from({ length: N }, (_, idx) => idx + 1);

  // 스테이지별 도전중인 사용자 수 [1, 3, 2, 1, 0]
  const challengingState = stageNumbers.map(
    (el) => stages.filter((stage) => stage === el).length
  );
  // 스테이지별 도전했던 사용자 수 [8, 7, 4, 2, 1]
  let challengers = [];
  let failCount = 0;
  for (let i = 1; i < N; i++) {
    challengers[i] = stages.length - failCount - challengingState[i - 1];
    failCount += challengingState[i - 1];
  }
  challengers[0] = stages.length;

  // 스테이지 번호와 실패율 배열
  const failRate = stageNumbers
    .map((el, idx) => [el, challengingState[idx] / challengers[idx]])
    .sort((a, b) => b[1] - a[1]);

  return failRate.map((el) => el[0]);
}

//다른 사람의 풀이
function solution(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    // 이걸 생각 못해서 길게 풀었다...
    let reach = stages.filter((x) => x >= i).length;
    let curr = stages.filter((x) => x === i).length;
    result.push([i, curr / reach]);
  }
  result.sort((a, b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}
