let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
let ascending_order = (x, y) => {return x - y}
let arr = input.sort(ascending_order)

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}
