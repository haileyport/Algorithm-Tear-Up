// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let numTestCase = Number(input[0]);

for (let i = 1; i <= numTestCase; i++) {
  let addingNum = 0;
  let sum = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === 'O') {
      addingNum += 1;
      sum += addingNum;
    }
    else if (input[i][j] === 'X') {
      addingNum = 0;
    }
  }
  console.log(sum);
}
