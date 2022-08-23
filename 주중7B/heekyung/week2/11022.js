const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');


for (let i = 1; i <= input[0]; i++) {
	let numbers= input[i].split(' ').map(Number);
	
	console.log(`Case #${i}: ${numbers[0]} + ${numbers[1]} = ${numbers[0] + numbers[1]}`)
}
