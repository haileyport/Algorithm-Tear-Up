let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim();
let input = fs.readFileSync('./02_10870.txt').toString().trim();

let before = 0;
let after = 1;
let result = 0;
if (input < 2){
  result = input;
}else{
  for(let i = 1; i < Number(input); i++){
    result = before + after;
    before = after;
    after = result;
  }
}
console.log(result);