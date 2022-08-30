let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim();
let input = fs.readFileSync('./06_1427.txt').toString().trim();

const solution = (income) => {
  console.log(income.split('').map(Number).sort((a,b) => b-a).join(''));
};
solution(input)