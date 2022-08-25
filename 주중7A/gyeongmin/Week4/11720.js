let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let count = input[0] //5
let nums = input[1] //54321
let sum = 0;

for(let i = 0; i < count; i++){
    sum += Number(nums[i]);
}
console.log(sum)
