let input = require("fs").readFileSync("/dev/stdin").toString().trim()
const alpha = ['c=' , 'c-','dz=','d-','lj','nj','s=','z=']

for(i=0; i<alpha.length ; i++){
	let re = new RegExp(alpha[i],'g')
	input = input.replace(re,'1')
}
console.log(input.length)
