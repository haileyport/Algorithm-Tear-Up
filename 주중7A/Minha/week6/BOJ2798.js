// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const n = input[0].split(' ')[0], m = input[0].split(' ')[1];
let cards = input[1].split(' ').map(arr => Number(arr));
let sum, count = 0, max = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      if (i == j || j == k || k == i) continue;
      sum = cards[i] + cards[j] + cards[k];
      // m을 넘지 않으면서 최대
      if (sum <= m && sum > max) max = sum;
      if (max == m) break;
    }
  }
}
console.log(max);