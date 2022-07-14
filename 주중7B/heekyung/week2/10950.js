const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
 
const testCase = input.shift()
 
input.forEach(a=>{
	const [A, B] = a.split(' ').map(Number);
	console.log(A + B)
})