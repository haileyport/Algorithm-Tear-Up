const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let answer = ''

for(let i = 1; i <= input[0];i++){
	let num = input[i].split(' ');
    answer += parseInt(num[0])+parseInt(num[1]) + '\n';
}	console.log(answer)