let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('./02_2751.txt').toString().trim().split('\n');

const solution = (income) => {
  let result = ''
  income.shift();
  (income.map(el => Number(el)).sort((a,b) => a - b).map(el => result += el + '\n'))
  console.log(result);

}
solution(input)