let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let str = input.toString(); 
result = str.charCodeAt(0);

console.log(result);
