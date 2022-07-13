// let fs = require('fs');
// // let input = fs.readFileSync('./06_2525.txt').toString().split('\n');
// // let arti = in
// // '/dev/stdin'

// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
// let arti = input[0].split(' ').map(Number);


// let H = arti[0];
// let M = arti[1];
// let T = arti[2];
// console.log(H);
// console.log(M);

let fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const current = input[0].split(' ').map(Number);

const H = current[0];
const M = current[1];
const T = Number(input[1]);


let inst = M + T; // 120
let count = 0;
if (inst < 60){
  console.log(`${H} ${inst}`);
}else{
  while(inst >= 60){
    inst = inst - 60;
    count++;
  }
}
if(count > 0){
  let overTime = H + count;
  if(overTime >= 24){
    overTime = overTime - 24;
  }
  console.log(`${overTime} ${inst}`);
}


// function solution (H, M, T) {
//   let inst = M + T; // 120
//   let count = 0;
//   //분(M)과 입력된 시간(T)를 더하고 남은 시간이 60이하로 떨어질 때까지 계속 빼주기
//   if (inst < 60){
//     console.log(`${H} ${inst}`);
//   }else{
//     while(inst >= 60){
//       inst = inst - 60;
//       count++;
//     }
//   }
//   let overTime = H + count;
//   if(overTime >= 24){
//     overTime = overTime - 24;
//   }
//   console.log(`${overTime} ${inst}`);
// }
// console.log(solution(a, b, c));


// if (M < 45){
//   let inst = 60 + (M - 45);
//   if(H === 0){
//     H = 23;
//     return `${H} ${inst}`
//   }else{
//     H = H - 1;
//     return `${H} ${inst}`
//   }
// }else if (M >= 45 && M <=59){
//   let inst = M - 45;
//   return `${H} ${inst}`
// }