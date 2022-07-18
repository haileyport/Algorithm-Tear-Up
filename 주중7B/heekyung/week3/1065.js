//등차수열
// 1부터 9까지는 비교할 대상이 없어서 등차수열이다.
// 10부터 99
// 10은 > 1,0 >1씩 감소 등차수열
// 11은 > 0 증가 등차수열
// 12는 > 1 증가 등차수열 
// 10부터 99는 등차수열
// 100 > 1,0,0   1감소 0증가 등차수열아님
// 123 > 1,2,3 > 1씩 증가 >등차수열
const input = require('fs').readFileSync('/dev/stdin').toString()


let count = 0;

for ( i = 1 ; i <= Number(input); i++){


	if (i < 100){

        count++
} else {
	let stringNum = i.toString()
		const splitNum = stringNum.split('').map(Number)
	if((splitNum[0]-splitNum[1]) === ( splitNum[1]-splitNum[2])){
		count++
	}
}
}
console.log(count)
