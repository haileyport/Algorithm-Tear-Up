//재귀함수 
// 같은일을 하는 함수끼리 상태만 달리해서 호출하는 것
// 어떤것을 return하는것이 중요 
const input = require('fs').readFileSync('/dev/stdin').toString()
function returnFunc(num){

    if (num < 1) return 1
	return num *= returnFunc(num-1)
}

console.log(returnFunc(input))
