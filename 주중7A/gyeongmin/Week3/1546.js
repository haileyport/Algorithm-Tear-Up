let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');;
//let input = require('fs').readFileSync('예제.txt').toString().split('\n');

let test = input[0]; //3
let nums = input[1].split(' ').map(Number); //[40, 80, 60]

//최댓값 구하기
let M = 0;
for(let i = 0; i < nums.length; i++){
  if(nums[i] > M){
    M = nums[i];
  } 
}
//console.log(M)

//평균구하기
let sum = 0;
for(let i = 0; i < nums.length; i++){
  sum += nums[i];
}
//console.log(sum)
console.log((sum/(M*test))*100)
