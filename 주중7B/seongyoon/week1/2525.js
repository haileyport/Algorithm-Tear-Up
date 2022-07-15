var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let H = parseInt(input[0].split(' ')[0]);
let M = parseInt(input[0].split(' ')[1]);
let C = parseInt(input[1]);

if (H*60+M+C<1440) {
    console.log(`${Math.floor((H*60+M+C)/60)} ${(H*60+M+C)%60}`);
} else {
    console.log(`${Math.floor((H*60+M+C)/60)-24} ${(H*60+M+C)%60}`);
}