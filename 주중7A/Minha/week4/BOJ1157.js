// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const input = require('fs').readFileSync('input.txt').toString().trim().split('\n')[0].toUpperCase();
let result;
// 각 알파벳의 출현 횟수를 담아둘 배열
count = Array(26).fill(0);
for (let i = 0; i < input.length; i++) {
  // 알파벳을 숫자로 변경해서 맞는 배열의 인덱스로 변경
  let alphabetIndex = input[i].charCodeAt(0) - 65;
  count[alphabetIndex]++;

}
const maxValue = Math.max(...count);
const howmany = count.filter((ele) => maxValue === ele).length;
if (howmany > 1) result = '?';
else {
  const maxIndex = count.indexOf(maxValue);
  result = String.fromCharCode(maxIndex + 65);
}

console.log(result);