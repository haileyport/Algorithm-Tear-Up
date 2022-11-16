let fs = require('fs');
// let input = fs.readFileSync('test.txt').toString().split(' ');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');


let a = parseInt(input[0]);
let b = parseInt(input[1]);

if(a<b){
    console.log('<');
}else if(a>b){
    console.log('>');
}else{
    console.log('==');
}