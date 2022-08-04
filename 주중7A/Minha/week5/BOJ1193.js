// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync('./input.txt').toString().trim();
const num = Number(input);
let i = 1;
let j = 1;

let toLeft = () => { j++ };
let toDown = () => { i++ };
let toLeftDown = () => { i++; j-- };
let toRightUp = () => { i--; j++ };

// i가 1일떄 -> j가 짝수면 좌측 대각선으로 내려가고, 홀수면 좌측으로. 
// j가 1일떄 -> i가 짝수면 아래로, 홀수면 우측으로 올라감.
for (let count = 1; count < num; count++) {
  if (i === 1) {
    (j % 2 === 0) ? toLeftDown() : toLeft();
  } else if (j === 1) {
    (i % 2 === 0) ? toDown() : toRightUp();
    // j와 i가 둘 다 짝수거나 홀수면 우측으로 올라가고, 서로 다르면 좌측으로 내려감.
  } else if ((i % 2 === 0) === (j % 2 === 0)) {
    toRightUp();
  } else { toLeftDown(); }
}

console.log(i + '/' + j)