function solution(dartResult) { // dartResult = 1S2D*3T
  let answer = [];
  let scores = dartResult.match(/[0-9]+/g); // [ '1', '2', '3' ] 
  let effects = dartResult.split(/[0-9]+/g).slice(1); // [ 'S', 'D*', 'T' ]

  for (let i = 0; i < 3; i++) {
    let score = Number(scores[i]);
    let effect = effects[i];
    for (let j = 0; j < effect.length; j++) {
      if (effect[j] === 'D') score = Math.pow(score, 2);
      if (effect[j] === 'T') score = Math.pow(score, 3);
      if (effect[j] === '*') {
        score *= 2;
        if (answer[i - 1]) answer[i - 1] *= 2; // 바로 전에 얻은 점수가 있으면 그 점수도 2배
      }
      if (effect[j] === '#') score *= -1;
    }
    answer.push(score);
  }

  answer = answer.reduce((prev, curr) => prev + curr);
  return answer;
}