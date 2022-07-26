let fs = require('fs');
let input = fs.readFileSync('input.txt').toString();


let res = input.split(' ');

let a = Number(res[0]);
let b = Number(res[1]);

if(a > b){
    console.log('>');
}else if(a < b){
    console.log('<')
}else{
    console.log('==');
}