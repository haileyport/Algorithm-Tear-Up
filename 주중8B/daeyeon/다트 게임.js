/*

테스트 1 〉	통과 (0.30ms, 33.4MB)
테스트 2 〉	통과 (0.32ms, 33.4MB)
테스트 3 〉	통과 (0.22ms, 33.5MB)
테스트 4 〉	통과 (0.25ms, 33.4MB)
테스트 5 〉	통과 (0.33ms, 33.5MB)
테스트 6 〉	통과 (0.23ms, 33.4MB)
테스트 7 〉	통과 (0.31ms, 33.4MB)
테스트 8 〉	통과 (0.26ms, 33.6MB)
테스트 9 〉	통과 (0.23ms, 33.6MB)
테스트 10 〉	통과 (0.29ms, 33.5MB)
테스트 11 〉	통과 (0.22ms, 33.4MB)
테스트 12 〉	통과 (0.25ms, 33.6MB)
테스트 13 〉	통과 (0.30ms, 33.5MB)
테스트 14 〉	통과 (0.24ms, 33.4MB)
테스트 15 〉	통과 (0.22ms, 33.4MB)
테스트 16 〉	통과 (0.24ms, 33.4MB)
테스트 17 〉	통과 (0.23ms, 33.5MB)
테스트 18 〉	통과 (0.24ms, 33.5MB)
테스트 19 〉	통과 (0.22ms, 33.4MB)
테스트 20 〉	통과 (0.23ms, 33.6MB)
테스트 21 〉	통과 (0.22ms, 33.5MB)
테스트 22 〉	통과 (0.29ms, 33.4MB)
테스트 23 〉	통과 (0.23ms, 33.5MB)
테스트 24 〉	통과 (0.23ms, 33.4MB)
테스트 25 〉	통과 (0.28ms, 33.4MB)
테스트 26 〉	통과 (0.36ms, 33.4MB)
테스트 27 〉	통과 (0.23ms, 33.5MB)
테스트 28 〉	통과 (0.31ms, 33.4MB)
테스트 29 〉	통과 (0.34ms, 33.6MB)
테스트 30 〉	통과 (0.29ms, 33.5MB)
테스트 31 〉	통과 (0.31ms, 33.4MB)
테스트 32 〉	통과 (0.22ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/

function solution(dartResult) {
  //이전의 점수를 더하는 식으로 하면 좋을듯
  let nums = dartResult
    .split(/['D'||'S'||'T'||'#'||'*']/)
    .filter((el) => el !== "");

  let sen = dartResult.split(/\d/).filter((el) => el);

  const obj = {
    S: 1,
    D: 2,
    T: 3,
  };

  let total = [];
  let score = 0;
  for (let i = 0; i < nums.length; i++) {
    if (sen[i][1] === "*") {
      score = Math.pow(nums[i], obj[sen[i][0]]) * 2;
      total[total.length - 1] = total[total.length - 1] * 2;
    } else if (sen[i][1] === "#")
      score = Math.pow(nums[i], obj[sen[i][0]]) * -1;
    else score = Math.pow(nums[i], obj[sen[i][0]]);

    total.push(score);
  }

  return total.reduce((a, b) => a + b);
}
