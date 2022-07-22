let fs = require('fs');
let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

let H = Number(input[0]);  // Hour
let M = Number(input[1]);  // Minute

//조건1 m이 45보다 작을 때 h,m둘다 -1이 됨
//조건2 m이 45보다 클때 h는 그대로 m은 m에서 45빼기
//조건3 h가 00시일 때 m이 45보다 작으면 23이됨 

if( M < 45){ 
    H = H - 1;
    M= 60 + (M - 45);
        if(H === -1){
            H = 23;
        }
    }
   else{
    M = M- 45;
    }

console.log(`${H} ${M}`);