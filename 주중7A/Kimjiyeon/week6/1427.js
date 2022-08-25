const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('');
let numArr = input.map(x => +x);
let answer = '';
//5:42
numArr.sort(function (a,b) {return b - a;});

numArr.forEach(e => {
  answer += e;
})
console.log(answer);