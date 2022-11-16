let fs = require('fs');
//const [n, ...arr] = require('fs').readFileSync('test.txt').toString().trim().split(/\s+/);
const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/);

result = ''
let max = Number(arr[0]);
let min = Number(arr[0]);

for(let i = 1; i < n; i++){
    if(max < Number(arr[i])){
        max = Number(arr[i]);
    }
    if(min > Number(arr[i])){
        min = Number(arr[i]);
    }
}

console.log(min, max);
