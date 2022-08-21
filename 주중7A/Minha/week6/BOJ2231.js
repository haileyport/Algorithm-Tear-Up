// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = require('fs').readFileSync('input.txt').toString().trim();
let sum = 0;
let isFound = false;
for (let i = 0; i < Number(input); i++) {
  let arrI = [...String(i)];
  let arr = arrI.map(el => Number(el));
  sum = arr.reduce((prev, curr) => prev + curr);
  sum += i;
  if(sum===Number(input)) {
    console.log(i);
    isFound = true;
    break;
  }
}
if(!isFound) console.log(0);