const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let arr = input.split(' ');
if(arr[0]===''){
    arr.shift()
}
console.log(arr.length);