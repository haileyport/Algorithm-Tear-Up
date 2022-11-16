let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const firstline = input.shift().split(' ');
const n = firstline[0], m = firstline[1];
const NumToName = new Map(); // 포켓몬 번호 => 포켓몬 이름
const NameToNum = new Map(); // 포켓몬 이름 => 포켓몬 번호
for (let i = 0; i < n; i++) {
  NumToName.set(i + 1, input[i]);
  NameToNum.set(input[i], i + 1);
}
const quiz = input.slice(n, input.length);
let result = '';

quiz.forEach(el => {
  // 문자라면
  if (isNaN(Number(el))) {
    result += NameToNum.get(el) + "\n";
  } else { // 숫자라면
    result += NumToName.get(+el) + "\n";
  }
})
console.log(result.trim());