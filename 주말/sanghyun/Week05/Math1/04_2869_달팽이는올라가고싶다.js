let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = fs.readFileSync('./04_2869.txt').toString().trim().split(' ');

// reference https://st-lab.tistory.com/75
function solution (income){
  let a = Number(income[0]); // 히루 올라간 거리
  let b = Number(income[1]); // 하루 내려간 거리
  let c = Number(income[2]); // 총 높이
 
  let days = ((c - b)/(a - b))
  console.log(Math.ceil(days));

}
solution(input);