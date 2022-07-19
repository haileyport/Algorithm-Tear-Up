let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let num = (a*b*c).toString(); 
let arr = [0,0,0,0,0,0,0,0,0,0];
for (let i=0; i<num.length; i++) {
    arr[Number(num[i])] += 1;
}
arr.forEach(function(el) {
    console.log(el);
});