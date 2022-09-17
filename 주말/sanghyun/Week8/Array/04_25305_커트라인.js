let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('./04_25305.txt').toString().trim().split('\n');

const solution = (income) => {
  // console.log(income);
  let cutOff = parseInt(income[0].split(' ')[1]);
  let students = income[1].split(' ').map(Number).sort((a, b) => b - a);
  // console.log(students);
  // console.log(cutOff);
  console.log(students[cutOff - 1]);


}
solution(input);