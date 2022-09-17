const fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());
// 1(0+1) 0 6*0 1
// ~7(6+1) 6 0+6*1 2
// ~19(18+1) 18 6+6*2 3
// ~37(36+1) 36 18+6*3 4
// ~61(60+1) 60 36+6*4 5
// ~91(90+1) 90 60+6*5 6
// ~127(126+1) 126 90+6*6 7

//let input = Number(''.trim()); // console.log(input)

let count = 1;
let preNum = 1;

while (preNum < input) {
  preNum = preNum + 6 * count;
  count++;
}

console.log(count);
