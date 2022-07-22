let fs = require('fs');
const [x, y] = fs.readFileSync(0).toString().trim().split('\n').map(Number);
출처: https://overcome-the-limits.tistory.com/323 [Plus Ultra:티스토리]

if (x > 0 && y > 0){
  console.log('1');
}else if (x < 0 && y > 0){
  console.log('2');
}else if (x < 0 && y < 0){
  console.log('3');
}else if (x > 0 && y < 0){
  console.log('4');
}
// function solution(x, y) {
//   if (x > 0 && y > 0){
//     return 1;
//   }else if (x < 0 && y > 0){
//     return 2;
//   }else if (x < 0 && y < 0){
//     return 3;
//   }else if (x > 0 && y < 0){
//     return 4;
//   }
// }