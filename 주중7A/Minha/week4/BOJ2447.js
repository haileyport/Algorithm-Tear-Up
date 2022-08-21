// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync('input.txt').toString().split('\n')[0];
let result = '';
const star = (i, j, num) => {
  if (i % 3 === 1 && j % 3 === 1) {
    result += " ";
  } else {
    if (num === 1) {
      result += "*";
    } else {
      star(Math.floor(i / 3), Math.floor(j / 3), Math.floor(num / 3));
    }
  }
};

for (let i = 0; i < input; i++) {
  for (let j = 0; j < input; j++) {
    star(i, j, input);
  }
  result += "\n";
}

console.log(result);