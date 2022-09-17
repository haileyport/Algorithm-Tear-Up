// 정렬  10989_수정렬하기3 실패 메모리초과
// 난이도 : 브론즈1
// 풀이시간 : 분
// 메모리 :	  KB      
// 시간 :   ms      
// 코드길이 :  B

// sort로 정렬해보자!

const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let nums = input.slice(1, input.length).sort((a, b) => a - b);

for(let i = 0; i < nums.length; i++) {
    console.log(nums[i])
}