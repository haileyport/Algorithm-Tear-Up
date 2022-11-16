function solution(dartResult) {
  let answer = [];

  let scores = dartResult.match(/[0-9]+/g); 
  let effects = dartResult.split(/[0-9]+/g).slice(1); 
  console.log(scores, effects)
  
  for (let i = 0; i < 3; i++) {
      let score = Number(scores[i]);
      let effect = effects[i]
      for (let j = 0; j < effect.length; j++) {
          if (effect[j] === 'D') score = Math.pow(score, 2);
          if (effect[j] === 'T') score = Math.pow(score, 3);
          if (effect[j] === '*') {
              score *= 2;
              if (answer[i - 1]) answer[i - 1] *= 2;
          }   
          if (effect[j] === '#') score *= -1;
      }
      answer.push(score);
  }

  answer = answer.reduce((prev, curr) => prev + curr);
  return answer;
}   