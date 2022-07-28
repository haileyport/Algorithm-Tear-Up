let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//let input = require('fs').readFileSync('예제.txt').toString().split('\n');

let count = input[0];
let nums = input[1].split(' ').map(Number);
//console.log(nums); //[20, 10, 35, 30, 7]

let ascending_order = function (x, y) {
  return x - y ;
}
nums.sort(ascending_order);

//console.log(nums); //[7, 10, 20, 30, 35]

console.log(`${nums[0]} ${nums[count-1]}`)
