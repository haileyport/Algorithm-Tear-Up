function solution(dartResult) {
  let dart = dartResult
    .split("")
    .map((el) => (Number.isNaN(Number(el)) ? el : Number(el)));
  let dartRE = [];
  // console.log(dart);
  let el = [];
  for (let i = 0; i < dart.length; i++) {
    // console.log(`index : ${i} value : ${dart[i]}`);
    if (dart[i] === "*" || dart[i] === "#") {
      el.push(dart[i]);
      dartRE.push(el);
      el = [];
    } else {
      if (typeof dart[i] === "number" && typeof dart[i + 1] === "string") {
        el.push(dart[i]);
      } else if (
        typeof dart[i] === "string" &&
        typeof dart[i + 1] === "string"
      ) {
        el.push(dart[i]);
      } else if (
        typeof dart[i] === "string" &&
        typeof dart[i + 1] === "number"
      ) {
        el.push(dart[i]);
        dartRE.push(el);
        el = [];
      } else if (
        typeof dart[i] === "number" &&
        typeof dart[i + 1] === "number"
      ) {
        el.push(10);
        el.push(dart[i + 2]);
        i++;
      } else if (
        (dart[i - 1] === "*" || dart[i - 1] === "#") &&
        typeof dart[i] === "number"
      ) {
        el.push(dart[i]);
      } else if (i === dart.length - 1) {
        el.push(dart[i]);
        dartRE.push(el);
      }
    }
  }
  console.log(dartRE);
  let answer = [];
  let bonus = [];
  for (let i = 0; i < 3; i++) {
    let point;
    point = dartRE[i][0];
    if (dartRE[i][1] === "D") {
      point = point * point;
    }
    if (dartRE[i][1] === "T") {
      point = point * point * point;
    }
    if (dartRE[i][2] === undefined) {
      bonus.push(1);
    } else {
      bonus.push(dartRE[i][2]);
    }
    answer.push(point);
  }

  console.log(answer);

  for (let i = 0; i < 3; i++) {
    if (bonus[i] === "*") {
      answer[i - 1] = answer[i - 1] * 2;
      answer[i] = answer[i] * 2;
    } else if (bonus[i] === "#") {
      answer[i] = -answer[i];
    } else if (bonus[i] === 1) {
      answer[i] = answer[i] * 1;
    }
  }
  console.log(answer.slice(0, 3));
  return answer.slice(0, 3).reduce((a, b) => a + b, 0);
}

// 정확성  테스트
// 테스트 1 〉	통과 (3.48ms, 33.5MB)
// 테스트 2 〉	통과 (3.37ms, 33.5MB)
// 테스트 3 〉	통과 (3.58ms, 33.7MB)
// 테스트 4 〉	통과 (3.48ms, 33.6MB)
// 테스트 5 〉	통과 (3.41ms, 33.5MB)
// 테스트 6 〉	통과 (3.37ms, 33.6MB)
// 테스트 7 〉	통과 (3.51ms, 33.5MB)
// 테스트 8 〉	통과 (3.39ms, 33.6MB)
// 테스트 9 〉	통과 (3.39ms, 33.6MB)
// 테스트 10 〉	통과 (3.40ms, 33.6MB)
// 테스트 11 〉	통과 (3.38ms, 33.5MB)
// 테스트 12 〉	통과 (3.39ms, 33.5MB)
// 테스트 13 〉	통과 (3.36ms, 33.5MB)
// 테스트 14 〉	통과 (3.91ms, 33.5MB)
// 테스트 15 〉	통과 (3.41ms, 33.6MB)
// 테스트 16 〉	통과 (3.47ms, 33.7MB)
// 테스트 17 〉	통과 (3.70ms, 33.5MB)
// 테스트 18 〉	통과 (3.74ms, 33.5MB)
// 테스트 19 〉	통과 (3.39ms, 33.5MB)
// 테스트 20 〉	통과 (4.51ms, 33.5MB)
// 테스트 21 〉	통과 (3.55ms, 33.5MB)
// 테스트 22 〉	통과 (3.43ms, 33.5MB)
// 테스트 23 〉	통과 (3.43ms, 33.5MB)
// 테스트 24 〉	통과 (3.93ms, 33.5MB)
// 테스트 25 〉	통과 (3.41ms, 33.5MB)
// 테스트 26 〉	통과 (3.40ms, 33.5MB)
// 테스트 27 〉	통과 (3.46ms, 33.5MB)
// 테스트 28 〉	통과 (3.50ms, 33.6MB)
// 테스트 29 〉	통과 (3.55ms, 33.5MB)
// 테스트 30 〉	통과 (4.37ms, 33.5MB)
// 테스트 31 〉	통과 (3.42ms, 33.5MB)
// 테스트 32 〉	통과 (3.60ms, 33.5MB)
