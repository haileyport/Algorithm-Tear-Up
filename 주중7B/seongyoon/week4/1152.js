let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let count=0;
for(let el of input){
    if (el!=='') {
        count++;
    }
}
console.log(count);