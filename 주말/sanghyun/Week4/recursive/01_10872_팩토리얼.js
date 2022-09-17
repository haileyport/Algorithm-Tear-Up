let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim();
let input = fs.readFileSync('./01_10872.txt').toString().trim();

let result = 1;
const upto = Number(input);
for (let i = 1; i <= upto; i++){
  result *= i;
}
console.log(result);