let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = input[0] //2
let P = '';

for(let i = 1; i <= count; i++){
    let R = input[i].split(' ')[0] //3
    let Ses = input[i].split(' ')[1]; // ABC
    for(j = 0; j < Ses.length; j++){
        P += Ses[j].repeat(R)
    }   
    P += '\n';
}
console.log(P)
