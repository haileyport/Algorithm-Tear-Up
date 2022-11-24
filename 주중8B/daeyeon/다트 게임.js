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
  // 라운드를 기준으로 탐색 하기위해 배열로 만든다.
  let nums = dartResult
    .split(/['D'||'S'||'T'||'#'||'*']/)
    .filter((el) => el !== "");

  let operator = dartResult.split(/\d/).filter((el) => el);

  //점수를 쉽게 계산하기 위해 객체에 저장
  const obj = {
    S: 1,
    D: 2,
    T: 3,
  };

  // 문제에서 낸 조건에 맞게 계산
  let total = [];
  let score = 0;

  //nums의 배열의 수와 operator의 배열의 수가 같으므로
  for (let i = 0; i < nums.length; i++) {
    if (operator[i][1] === "*") {
      score = Math.pow(nums[i], obj[operator[i][0]]) * 2;
      total[total.length - 1] = total[total.length - 1] * 2; //마지막에 저장한값 2배
    } 
    else if (operator[i][1] === "#")
      score = Math.pow(nums[i], obj[operator[i][0]]) * -1;
    else score = Math.pow(nums[i], obj[operator[i][0]]);

    total.push(score);
  }

  return total.reduce((a, b) => a + b);
}
