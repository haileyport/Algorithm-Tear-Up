/*
통과 여부 : 통과
시간 : 1시간 반
점수 : +3

* 아차상, 스타상은 아직도 이해 xxxxx
*/

/**
 * 얘네는 게임을 너무 많이 해요
 * 3번 던지고, 점수는 0~10
 * S, D, T 영역 각 영역마다 제곱
 * 스타상 * => 해당점수와 바로 전 점수 2배
 * 아차상 # => 해당 점수는 마이너스
 * @param {*} dartResult
 * @returns
 */
function solution(dartResult) {
  let num = 0;
  let sign = "";

  let scores = [];

  for (let i = 0; i < dartResult.length; i++) {
    // 정규표현식으로
    let regExp = /[0-9]/;
    if (regExp.test(dartResult[i])) {
      num = +dartResult[i - 1] === 1 ? 10 : +dartResult[i]; // 그 전이 1이면 10으로
    } else {
      sign = dartResult[i];
      switch (sign) {
        case "S": // 1제곱
          scores.push(Math.pow(num, 1));
          break;
        case "D": // 2제곱
          scores.push(Math.pow(num, 2));
          break;
        case "T": // 3제곱
          scores.push(Math.pow(num, 3));
          break;
        case "*": // 이전과 현재 수 곱함
          if (scores.length -2 >= 0) {
            scores[scores.length -2] *= 2;
          }
          // 첫 번째 기회에 나올 때
          scores[scores.length -1] *=2;
          break;
        case "#":
          scores[scores.length-1] *= -1;
          break;
      }
    }
    console.log(scores);
  }
  return scores.reduce((acc,cur)=> acc += cur);
}

let dartResult = "1S*2T*3S";
let output = solution(dartResult);
console.log(output);

/**
 * 
 * 테스트 1 〉	통과 (0.25ms, 33.5MB)
테스트 2 〉	통과 (0.27ms, 33.5MB)
테스트 3 〉	통과 (0.24ms, 33.6MB)
테스트 4 〉	통과 (0.30ms, 33.5MB)
테스트 5 〉	통과 (0.22ms, 33.6MB)
테스트 6 〉	통과 (0.29ms, 33.5MB)
테스트 7 〉	통과 (0.20ms, 33.5MB)
테스트 8 〉	통과 (0.19ms, 33.5MB)
테스트 9 〉	통과 (0.24ms, 33.5MB)
테스트 10 〉	통과 (0.26ms, 33.5MB)
테스트 11 〉	통과 (0.21ms, 33.6MB)
테스트 12 〉	통과 (0.18ms, 33.6MB)
테스트 13 〉	통과 (0.20ms, 33.6MB)
테스트 14 〉	통과 (0.25ms, 33.5MB)
테스트 15 〉	통과 (0.27ms, 33.5MB)
테스트 16 〉	통과 (0.18ms, 33.5MB)
테스트 17 〉	통과 (0.28ms, 33.5MB)
테스트 18 〉	통과 (0.24ms, 33.5MB)
테스트 19 〉	통과 (0.26ms, 33.5MB)
테스트 20 〉	통과 (0.21ms, 33.5MB)
테스트 21 〉	통과 (0.25ms, 33.5MB)
테스트 22 〉	통과 (0.20ms, 33.5MB)
테스트 23 〉	통과 (0.21ms, 33.5MB)
테스트 24 〉	통과 (0.28ms, 33.5MB)
테스트 25 〉	통과 (0.27ms, 33.4MB)
테스트 26 〉	통과 (0.26ms, 33.5MB)
테스트 27 〉	통과 (0.24ms, 33.5MB)
테스트 28 〉	통과 (0.16ms, 33.5MB)
테스트 29 〉	통과 (0.19ms, 33.6MB)
테스트 30 〉	통과 (0.17ms, 33.5MB)
테스트 31 〉	통과 (0.17ms, 33.5MB)
테스트 32 〉	통과 (0.17ms, 33.6MB)
 */