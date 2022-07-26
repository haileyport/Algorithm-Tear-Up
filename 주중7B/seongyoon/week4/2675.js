let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let testcase = +input[0];
let result = '';

for(let i=1;i<=testcase;i++){
    let r = Number(input[i].split(' ')[0]);
    let str = input[i].split(' ')[1];
    for(let j=0;j<str.length;j++){
        result+=str[j].repeat(r);
    }
    result+='\n'
}
console.log(result);