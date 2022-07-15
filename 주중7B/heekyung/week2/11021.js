const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const testCase = input.shift();
 
input.forEach((a,idx)=>{
    const [A, B] = a.split(' ').map(Number)
    console.log(`Case #${idx+1}: ${A} + ${B} = ${A+B}`)
})
// 값이 같게 나오는데 왜  틀렸다고 표기될까..

//정답풀이
const input2 = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let i = 1; i <= input2[0]; i++) {
	let numbers= input2[i].split(' ').map(Number);
	
	console.log(`Case #${i}: ${numbers[0]} + ${numbers[1]} = ${numbers[0] + numbers[1]}`)
}
