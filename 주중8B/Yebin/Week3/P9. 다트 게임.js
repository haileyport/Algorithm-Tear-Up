/*
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.21ms, 33.4MB)
테스트 2 〉	통과 (0.23ms, 33.5MB)
테스트 3 〉	통과 (0.22ms, 33.4MB)
테스트 4 〉	통과 (0.24ms, 33.6MB)
테스트 5 〉	통과 (0.21ms, 33.4MB)
테스트 6 〉	통과 (0.30ms, 33.4MB)
테스트 7 〉	통과 (0.25ms, 33.4MB)
테스트 8 〉	통과 (0.31ms, 33.4MB)
테스트 9 〉	통과 (0.22ms, 33.4MB)
테스트 10 〉	통과 (0.22ms, 33.4MB)
테스트 11 〉	통과 (0.35ms, 33.6MB)
테스트 12 〉	통과 (0.26ms, 33.5MB)
테스트 13 〉	통과 (0.22ms, 33.4MB)
테스트 14 〉	통과 (0.22ms, 33.6MB)
테스트 15 〉	통과 (0.31ms, 33.4MB)
테스트 16 〉	통과 (0.23ms, 33.6MB)
테스트 17 〉	통과 (0.23ms, 33.5MB)
테스트 18 〉	통과 (0.22ms, 33.4MB)
테스트 19 〉	통과 (0.22ms, 33.4MB)
테스트 20 〉	통과 (0.25ms, 33.4MB)
테스트 21 〉	통과 (0.23ms, 33.5MB)
테스트 22 〉	통과 (0.21ms, 33.4MB)
테스트 23 〉	통과 (0.21ms, 33.4MB)
테스트 24 〉	통과 (0.23ms, 33.4MB)
테스트 25 〉	통과 (0.37ms, 33.5MB)
테스트 26 〉	통과 (0.21ms, 33.4MB)
테스트 27 〉	통과 (0.24ms, 33.4MB)
테스트 28 〉	통과 (0.24ms, 33.4MB)
테스트 29 〉	통과 (0.22ms, 33.4MB)
테스트 30 〉	통과 (0.21ms, 33.4MB)
테스트 31 〉	통과 (0.26ms, 33.5MB)
테스트 32 〉	통과 (0.31ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/

// 이전에 풀었을 때보다 코드는 줄었지만 시간은 더 오래걸린다.
function solution(dartResult) {
  // dartResult = "1S2D*3T"
  const score = {
    S: 1,
    D: 2,
    T: 3,
    "*": 2,
    "#": -1,
  };
  // const regExp = /\d\d?.?\D/g;
  // const arr = dartResult.match(regExp); // ['1S', '2D*', '3T'] 이걸로도 풀 수 있을 것 같은데..
  let scores = [],
    end = 0,
    number;
  for (let i = 0; i < dartResult.length; i++) {
    // 라운드별 기본 점수
    if (/[A-Z]/.test(dartResult[i])) {
      number = dartResult.substring(end, i);
      scores.push(number ** score[dartResult[i]]);
      end = i + 1;

      // 스타상 점수 계산
    } else if (/[*]/.test(dartResult[i])) {
      scores[scores.length - 1] *= 2;
      if (scores[scores.length - 2]) scores[scores.length - 2] *= 2;
      end = i + 1;

      // 아차상 점수 계산
    } else if (/[#]/.test(dartResult[i])) {
      scores[scores.length - 1] *= -1;
      end = i + 1;
    }
  }
  return scores.reduce((a, b) => a + b, 0);
}

/**
정확성  테스트
테스트 1 〉	통과 (0.13ms, 33.6MB)
테스트 2 〉	통과 (0.13ms, 33.5MB)
테스트 3 〉	통과 (0.23ms, 33.3MB)
테스트 4 〉	통과 (0.13ms, 33.5MB)
테스트 5 〉	통과 (0.13ms, 33.4MB)
테스트 6 〉	통과 (0.13ms, 33.4MB)
테스트 7 〉	통과 (0.14ms, 33.5MB)
테스트 8 〉	통과 (0.13ms, 33.4MB)
테스트 9 〉	통과 (0.14ms, 33.5MB)
테스트 10 〉	통과 (0.14ms, 33.4MB)
테스트 11 〉	통과 (0.14ms, 33.4MB)
테스트 12 〉	통과 (0.14ms, 33.4MB)
테스트 13 〉	통과 (0.15ms, 33.5MB)
테스트 14 〉	통과 (0.19ms, 33.4MB)
테스트 15 〉	통과 (0.15ms, 33.6MB)
테스트 16 〉	통과 (0.14ms, 33.5MB)
테스트 17 〉	통과 (0.14ms, 33.5MB)
테스트 18 〉	통과 (0.14ms, 33.5MB)
테스트 19 〉	통과 (0.14ms, 33.4MB)
테스트 20 〉	통과 (0.14ms, 33.4MB)
테스트 21 〉	통과 (0.14ms, 33.6MB)
테스트 22 〉	통과 (0.14ms, 33.3MB)
테스트 23 〉	통과 (0.14ms, 33.4MB)
테스트 24 〉	통과 (0.14ms, 33.4MB)
테스트 25 〉	통과 (0.16ms, 33.4MB)
테스트 26 〉	통과 (0.14ms, 33.5MB)
테스트 27 〉	통과 (0.13ms, 33.4MB)
테스트 28 〉	통과 (0.14ms, 33.5MB)
테스트 29 〉	통과 (0.21ms, 33.5MB)
테스트 30 〉	통과 (0.16ms, 33.4MB)
테스트 31 〉	통과 (0.13ms, 33.5MB)
테스트 32 〉	통과 (0.14ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

// 예전 풀이
function solution(dartResult) {
  let score = dartResult
    .replaceAll("S", "S.")
    .replaceAll("D", "D.")
    .replaceAll("T", "T.")
    .replaceAll("*", "*.")
    .replaceAll("#", "#.");

  if (score[score.length - 1] === ".") score = score.slice(0, score.length - 1);

  let scoreArr = score.split(".");

  let ter = ["S", "D", "T"];
  let prize = ["*", "#"];

  scoreArr = scoreArr.map((v) => {
    if (!prize.includes(v)) {
      if (v.length === 2) {
        return v[0] ** (ter.indexOf(v[1]) + 1);
      }
      if (v.length === 3) return 10 ** (ter.indexOf(v[2]) + 1);
    }
    return v;
  });

  if (scoreArr.indexOf("*") >= 0) {
    for (let i = 0; i < scoreArr.length; i++) {
      if (scoreArr[i] === "*") {
        if (scoreArr[i - 2]) {
          if (typeof scoreArr[i - 2] === "number") scoreArr[i - 2] *= 2;
          if (typeof scoreArr[i - 2] !== "number" && scoreArr[i - 3])
            scoreArr[i - 3] *= 2;
        }
        if (scoreArr[i - 1]) scoreArr[i - 1] *= 2;
      }
    }
    for (var i = 0; i < scoreArr.length; i++) {
      if (scoreArr[i] === "*") {
        scoreArr.splice(i, 1);
        i--;
      }
    }
  }
  if (scoreArr.indexOf("#") >= 0) {
    for (let i = 0; i < scoreArr.length; i++) {
      if (scoreArr[i] === "#") scoreArr[i - 1] *= -1;
    }
    for (var i = 0; i < scoreArr.length; i++) {
      if (scoreArr[i] === "#") {
        scoreArr.splice(i, 1);
        i--;
      }
    }
  }

  return scoreArr.reduce((a, b) => a + b);
}

//다른 사람의 풀이
function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 },
    options = { "*": 2, "#": -1, undefined: 1 };

  let darts = dartResult.match(/\d.?\D/g);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

    if (split[3] === "*" && darts[i - 1]) darts[i - 1] *= options["*"];

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}
