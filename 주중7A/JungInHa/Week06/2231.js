const fs = require('fs');
const N  = Number(fs.readFileSync('./input.txt').toString().trim());
// const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

let constructor = [];

for (let i = 0; i < N; i++) {
    let sum = i;
    let arr = String(i).split('').map(n => Number(n));
    for (let j = 0; j < arr.length; j++) {
        sum += arr[j];
    }
    if (sum === N) {
        constructor.push(i)
    }
}

let result = (constructor.length === 0) ? 0 : Math.min(...constructor)
console.log(result)