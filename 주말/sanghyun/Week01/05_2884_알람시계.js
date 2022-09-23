let fs = require('fs');
let [H, M] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

if (M < 45){
  let inst = 60 + (M - 45);
  if(H === 0){
    H = 23;
    console.log(H + ' ' + inst); 
  }else{
    H = H - 1;
    console.log(H + ' ' + inst); 
  }
}else if (M >= 45 && M <=59){
  let inst = M - 45;
  console.log(H + ' ' + inst); 
}

/*
function solution (H, M){ 
  // 0 ≤ H ≤ 23, 0 ≤ M ≤ 59
  // H시 M분
  // 자정을 한번 고려, 0시 44분까지는 고려해야함
  // 1. 먼저 44분 이하면 -45를 하고 남은 시간을 구함
  // 1-1. 이 때 시침을 뒤로 돌리는 작업 (예: 10시 -> 9시)
  // 1-2. 단, 시침이 0시일 경우 23으로 수정
  // 2. 만약 45분 ~ 59a면 -45를 하고 그대로 출력
  // 2-1. 시침을 한번 뒤로 돌리고 출력

  if (M < 45){
    let inst = 60 + (M - 45);
    if(H === 0){
      H = 23;
      return `${H} ${inst}`
    }else{
      H = H - 1;
      return `${H} ${inst}`
    }
  }else if (M >= 45 && M <=59){
    let inst = M - 45;
    return `${H} ${inst}`
  }
}

// if (H === 0){
//   if (M < 45){
//     let inst = H - 45; // inst = 40 -45 = -5
//     if (inst < 0){
//       M = 60 - inst;
//       return `${H} ${M}`
//     }
//   }else{
//     let inst = H - 45; //45 - 45
//     return `${H} ${M}`
//   }
// }
*/