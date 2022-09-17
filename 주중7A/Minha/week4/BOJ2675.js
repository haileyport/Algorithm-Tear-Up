// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
for (let i = 1; i <= input[0]; i++) { // 2번 진행
  let result = '';
  let testcase = input[i].trim().split(' ');

  console.log(testcase[1].length);
  for (let j = 0; j < testcase[1].length; j++) {
    result += testcase[1][j].repeat(testcase[0]);
  }
  console.log(result);
}
