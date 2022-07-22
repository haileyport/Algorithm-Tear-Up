let fs = require('fs');

// let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(el => Number(el));
let input = fs.readFileSync('./03_2577.txt').toString().split('\n').map(el => Number(el));

/* 궁금한 부분 */
// 정답
//let total = String(input[0] * input[1] * input[2]);
// 제가 작성한 부분
 let total = String(input.reduce((a, b) => a * b), 1);
/* 궁금한 부분 */
for (let i = 0 ; i <=  9; i++){
  let count = 0;

  for (let x = 0 ; x < total.length; x++){
    if (i === Number(total[x])){
      count++;
    }
  }
  console.log(count);
}