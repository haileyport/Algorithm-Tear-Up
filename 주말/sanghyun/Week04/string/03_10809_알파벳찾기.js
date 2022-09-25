let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim()
let input = fs.readFileSync('./03_10809.txt').toString().trim();

// for문을 돌리는데 ascii 코드를 사용한다.
// a - z는 97 - 122
// ascii code에 해당하는 문자가 있으면 index 집어넣고 없으면 -1을 넣음
let result = '';
for (let i = 97 ; i <= 122; i ++){
  let turnInToString = String.fromCharCode(i);
  result += input.indexOf(turnInToString) + ' ';
}
console.log(result);
