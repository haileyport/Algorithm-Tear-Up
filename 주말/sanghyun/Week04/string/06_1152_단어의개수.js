let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim();
let input = fs.readFileSync('./06_1152.txt').toString().trim();

if (input.length === 0 ){
  // 공백이 입력되어 split(' ')을 하면 존재하는 것으로 인식하여 0으로 예외처리
  console.log(0);
}else{
  console.log(input.split(' ').length);
}