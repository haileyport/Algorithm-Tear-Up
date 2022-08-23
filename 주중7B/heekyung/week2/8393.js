const input = require('fs').readFileSync('/dev/stdin').toString()
let sum = 0;
for(i=0; i<= input ; i++) {
	sum += i
}
console.log(sum)