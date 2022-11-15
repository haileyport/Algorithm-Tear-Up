/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.07ms, 33.5MB)
테스트 2 〉	통과 (0.07ms, 33.5MB)
테스트 3 〉	통과 (0.06ms, 33.5MB)
테스트 4 〉	통과 (0.06ms, 33.4MB)
테스트 5 〉	통과 (0.07ms, 33.4MB)
테스트 6 〉	통과 (0.07ms, 33.5MB)
테스트 7 〉	통과 (0.06ms, 33.4MB)
테스트 8 〉	통과 (0.06ms, 33.5MB)
테스트 9 〉	통과 (0.07ms, 33.4MB)
테스트 10 〉	통과 (0.06ms, 33.4MB)
테스트 11 〉	통과 (0.12ms, 33.4MB)
테스트 12 〉	통과 (0.06ms, 33.4MB)
테스트 13 〉	통과 (0.07ms, 33.4MB)
테스트 14 〉	통과 (0.06ms, 33.5MB)
테스트 15 〉	통과 (0.06ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(lottos, win_nums) {
  const countZero = lottos.filter((el) => el === 0).length; // 0 개수
  const lottosNotZero = lottos.filter((el) => el !== 0); // 0을 제외한 배열
  const set = new Set(lottosNotZero.concat(win_nums)); // 중복 수 제거
  const failedCount = set.size - 6; // 확실한 틀린 번호의 개수
  let left, right;

  if (failedCount === 6) left = 6;
  else left = failedCount + 1;

  if (failedCount + countZero === 6) right = 6;
  else right = failedCount + countZero + 1;

  return [left, right];
}

//다른 사람의 풀이
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}
// filter를 사용하면 더 간편하다,,,,

/**
 * 0개 틀림 1등
 * 1개 틀림 2등
 * 2개 틀림 3등
 * 3개 틀림 4등
 * 4개 틀림 5등
 */
