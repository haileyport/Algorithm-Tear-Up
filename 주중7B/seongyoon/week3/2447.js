let input = require('fs').readFileSync('/dev/stdin').toString();
let num = +input;

let arr = [];

function f(i, j, num) {
    if(i%3===1&&j%3===1){
        arr.push(' ');
    } else {
        if (num===1) {
            arr.push('*');
        } else {
            f(Math.floor(i/3), Math.floor(j/3), Math.floor(num/3));
        }
    }
};

function g(num) {
    for (let i=0; i<num; i++) {
        for (let j=0; j<num; j++) {
            f(i, j, num);
        }
        arr.push('\n');
    }
};

g(num);
console.log(arr.join(''));

//3이면 1
//9일때 345
//9 10 11 12 ....