// 백준 2775번 - 부녀회장이 될테야 
// 브론즈1 / 9916KB / 128ms 

// 파일 날려먹고 다시 작성하느라 의사코드 사라졌습니다..눈물

let fs = require('fs');
const { format } = require('path');
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split('\n');
let T = parseInt(input.shift());

let apt = [];

for(let test = 0; test < T; test++){ 
  let k = parseInt(input.shift());
  let n = parseInt(input.shift());

  for(let i = 0; i <= k ; i++){
    apt.push([]);

    for(let j = 1; j <= n; j++){
      if(i === 0){
        apt[i][j] = j;
      }else if(i !== 0 && j === 1){
        apt[i][j] = 1;
      }else{
        apt[i][j] = apt[i - 1][j] + apt[i][j - 1];
      }
    }
  }
  console.log(apt[k][n]);
}

