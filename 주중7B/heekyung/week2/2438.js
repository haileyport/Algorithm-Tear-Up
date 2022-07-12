const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
result = '';
let num = Number(input);
for (let i = 0 ; i < num; i++ ){
    for (let j = 0;  j <= i ; j ++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);
