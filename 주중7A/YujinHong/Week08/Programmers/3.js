// Level 1
// [1차] 다트 게임

function solution(dartResult) {
  var answer = 0;
  let arr = [];
  let score = 0;

  for (let i = 0; i < dartResult.length; i++) {
    const dart = dartResult[i];
    // 숫자
    if (!isNaN(Number(dart))) {
      if (dartResult[i] === "1" && dartResult[i + 1] === "0") {
        score = 10;
        i++;
      } else {
        score = Number(dart);
      }
    }
    // 싱글
    if (dart === "S") arr.push(score);
    // 더블
    if (dart === "D") arr.push(Math.pow(score, 2));
    // 트라이앵글
    if (dart === "T") arr.push(Math.pow(score, 3));
    // 스타상
    if (dart === "*") {
      arr[arr.length - 1] *= 2;
      arr[arr.length - 2] *= 2;
    }
    // 아차상
    if (dart === "#") arr[arr.length - 1] *= -1;
  }

  answer = arr.reduce((acc, cur) => acc + cur);

  return answer;
}
