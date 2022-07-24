const input = require("fs").readFileSync("/dev/stdin").toString()
const upperInput = input.toUpperCase()

let foundel = {}
for(i=0; i< upperInput.length; i++){
	const regex = new RegExp(`[${upperInput[i]}]`, 'g');
	foundel[upperInput[i]] = upperInput.match(regex).length
	//객체 형식으로 저장
}
	let num = Object.values(foundel)
	let string =  Object.keys(foundel)
    // 객체 배열변환
	let maxNum = num[0]
	let maxString = string[0]
for(i=1; i<foundel.length; i++){

	if(maxNum < foundel[i]){
		maxNum = num[i]
		maxString = string[i]
		continue;
	} else if (maxNum === num[i] ){
		maxString = '?'
	}
}
//최대값 계산


 console.log(maxString)
//메모리 초과됨
