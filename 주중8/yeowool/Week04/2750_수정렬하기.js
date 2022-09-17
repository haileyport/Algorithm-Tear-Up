// 정렬  2750_수정렬하기
// 난이도 :  브론즈2
// 풀이시간 : 10 분
// 메모리 :	 10492 KB      
// 시간 : 204  ms      
// 코드길이 : 368 B

// sort를 사용하면 되지 않을까?

const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let nums = input.slice(1, input.length).sort((a, b) => a - b);
// console.log(nums.sort((a,b) => a - b)) // 바로 내보내기 했다가 실패함
// let result = "";
for(let i = 0; i < nums.length; i++) {
    // result = nums[i] + "\n";

    console.log(nums[i])
}