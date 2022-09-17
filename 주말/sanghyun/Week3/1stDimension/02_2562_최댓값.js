let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(el => Number(el));
// let input = fs.readFileSync('./02_2562.txt').toString().split('\n').map(el => Number(el));


let result = ''
function solution (arr){
  let maximal = arr.reduce((a, b) => a > b ? a : b);
  result += maximal+'\n';
  result += arr.indexOf(maximal) + 1;
}

solution(input); 
console.log(result);