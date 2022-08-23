let fs = require('fs');
const { format } = require('path');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('test.txt').toString( ).trim();

// 백준 11653번, 소인수분해 
// 브론즈 1/ 9888 KB/ 264ms

// 정수 N이 주어졌을 때, 소인수분해
// N의 소인수분해 결과를 한줄에 하나씩 오름차순으로 출력,
// N이 1인 경우 아무것도 출력하지 않는다

// 1. 입력값인 N을 nummber로 형변환해준다.
// 2. N을 i로 나누었을 때 나머지가 0이라면,
// N을 몫으로 재할당, i를 출력 후 차감 (다시 i로 나눠보기 위해)
// 3. N이 i로 나눠지지 않는다면 (나머지가 0이 아니라면)
// 넘어가며 i를 증감해주고 다음 수로 연산해준다

let N = Number(input);

// N이 1이라면 아무것도 출력하지 않으므로 무시!

for(let i = 2; i <= N; i++){
  if(N % i === 0){
    N = N / i; // 몫
    console.log(i);
    i--; 
  }
}
