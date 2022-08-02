let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let a = +input[0];
let b = +input[1];

let aa = Number(String(a)[2]+String(a)[1]+String(a)[0]);
let bb = Number(String(b)[2]+String(b)[1]+String(b)[0]);
console.log(aa > bb ? aa : bb);;