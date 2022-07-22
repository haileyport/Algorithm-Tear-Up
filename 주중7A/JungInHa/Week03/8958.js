// "OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다. 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다.
// 첫째 줄에 테스트 케이스의 개수가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, 길이가 0보다 크고 80보다 작은 문자열이 주어진다. 문자열은 O와 X만으로 이루어져 있다.
// 각 테스트 케이스마다 점수를 출력한다.

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let N = input[0];
let quizzes = [];

for (let i = 1; i <= N; i++) {
  quizzes.push(input[i]);
}

for (let j = 0; j < quizzes.length; j++) {
  let quiz = quizzes[j].split('')
  let correct = 1; 
  let score = 0;
  
  for (let c = 0; c < quiz.length; c++) {
    if (quiz[c] === 'O') {
      score = score + correct;
      correct++;
    } else {
      correct = 1;
    }
  }

  console.log(score);
}
