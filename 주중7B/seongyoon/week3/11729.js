let input = require('fs').readFileSync('/dev/stdin').toString();
let num = +input;
let arr=[2**num-1];

function Hanoi(num, from, to, other){
    if(num===1){
        arr.push(from + ' ' + to);
    }
    else{
        Hanoi(num-1, from, other, to);
        Hanoi(1, from, to, other);
        Hanoi(num-1, other, to, from)
    }
}

Hanoi(num, 1, 3, 2);
console.log(arr.join('\n'));