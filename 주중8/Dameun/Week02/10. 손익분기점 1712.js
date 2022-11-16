let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let a = input[0]*1;
let b = input[1]*1;
let c = input[2]*1;

if(b >= c){
    console.log(-1);
}else{
    let gap = c - b;
    let result = Math.floor(a/gap) + 1 ;
    console.log(result);
}