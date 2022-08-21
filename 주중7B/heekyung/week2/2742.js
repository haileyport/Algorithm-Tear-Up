const input = Number(require('fs').readFileSync('/dev/stdin').toString())

let result = '';
for(i=input; i>=1 ; i--) {
	result += i+'\n'
}
console.log(result);