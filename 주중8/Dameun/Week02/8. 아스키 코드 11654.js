let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let a = String(input[0]);
console.log(a.charCodeAt(0));

