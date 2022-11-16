const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ')
  //위치
let day = Math.ceil((input[2]-input[1])/(input[0]-input[1]))

console.log(day)