let fs = require('fs');
// let input = fs.readFileSync('test.txt').toString().split(' ');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');


let a = parseInt(input[0]);
// let b = parseInt(input[1]);
// let c = parseInt(input[2]);


for(let n = 1; n<=9; n++){
    console.log(`${a} * ${n} = ${a*n}`);
}