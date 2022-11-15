function solution(dartResult) {
  // 문자열 입력
  // case문으로 점수, 보너스, 옵션 나누기
  // 점수 두자리수일 경우 처리
  let score = [];
  for (let i = 0; i < dartResult.length; i++) {
    switch (true) {
      case /[0-9]/.test(dartResult[i]):
        if (+dartResult[i + 1] === 0) {
          score.push(+(dartResult[i] + "0"));
          i++;
        } else {
          score.push(dartResult[i]);
        }
        break;
      case /[SDT]/.test(dartResult[i]):
        if (dartResult[i] === "D")
          score[score.length - 1] = Math.pow(score[score.length - 1], 2);
        else if (dartResult[i] === "T")
          score[score.length - 1] = Math.pow(score[score.length - 1], 3);
        break;
      case /[*#]/.test(dartResult[i]):
        if (dartResult[i] === "*") {
          score[score.length - 1] *= 2;
          if (score.length > 1);
          score[score.length - 2] *= 2;
        } else if (dartResult[i] === "#") score[score.length - 1] *= -1;
        break;
    }
  }
  return score.map(Number).reduce((acc, cur) => acc + cur, 0);
}
