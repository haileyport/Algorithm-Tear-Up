const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);


for(let i=1; i<=num; i++){
   
    let count = 0;
    let arr = input[i].split(' ').map(Number);
    let n = arr[0];
    let av = (arr.reduce((acc , cur) => acc + cur, 0)-n)/n;

  for (let j = 1; j <= n; j++) {
    if (arr[j] > av) count++;
  }
  console.log(((count / n) * 100).toFixed(3) + '%');
}