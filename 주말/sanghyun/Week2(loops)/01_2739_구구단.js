let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
// let input = fs.readFileSync('./01_2739.txt').toString().split(' ');

let a = Number(input[0]);

// for (let i = 1; i < 10; i++){
//   console.log(a + ' * ' + i + ' = ' + (a * i))
// }

function solution(x){
  for (let i = 1; i < 10; i++){
    console.log(x + ' * ' + i + ' = ' + (x * i))
  }
}
solution(a);
