// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let result;
//1~99
if (input < 100) result = input[0];
else {
  //100~999
  result = 99;
  for (let i = 100; i <= input; i++) {
    let curr = String(i);
    curr = [...curr];
    if (curr[0] - curr[1] === curr[1] - curr[2]) result += 1; // js 빼기는 무조건 빼기연산만
  }
}
console.log(result);
