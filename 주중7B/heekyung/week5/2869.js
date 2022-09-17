const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const num = input[0].split(" ").map(Number);

let A = num[0];
let B = num[1];
let V = num[2];

let n;
// A + ((A-B)*n) = V

// A+(An - Bn)=V
//n(A-B)=V-A
//n = (V-A)/(A-B)
//V-A //하루걸림

n = (V - A) / (A - B) + 1;
console.log(Math.ceil(n));
