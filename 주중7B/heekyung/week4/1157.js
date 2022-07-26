const input = require("fs").readFileSync("/dev/stdin").toString().split('\n');


// let foundel = {}
// for(i=0; i< upperInput.length; i++){
// 	const regex = new RegExp(`[${upperInput[i]}]`, 'g');
// 	foundel[upperInput[i]] = upperInput.match(regex).length
// 	//객체 형식으로 저장
// }
// 	let num = Object.values(foundel)
// 	let string =  Object.keys(foundel)
//     // 객체 배열변환
// 	let maxNum = num[0]
// 	let maxString = string[0]
// for(i=1; i<foundel.length; i++){

// 	if(maxNum < foundel[i]){
// 		maxNum = num[i]
// 		maxString = string[i]
// 		continue;
// 	} else if (maxNum === num[i] ){
// 		maxString = '?'
// 	}
// }
//최대값 계산
//메모리 초과됨
const upperInput = input[0].toUpperCase()

    let obj = {}; 

    for(let i=0; i<upperInput.length; i++){
        
        if(obj[upperInput[i]] === undefined) {
            obj[upperInput[i]] = 1;  
        } else {
            obj[upperInput[i]] += 1 
    }

//객체 지정방식을 바꿔주고 

let maxNum = 0
let result = ''
for(el in foundel){
	if(foundel[el] > maxNum) {
		maxNum = foundel[el]
		result = el
	} else if( foundel[el] === maxNum ){
		result = '?'
	}
}}
//다시 반복문으로 최댓값 계산
 console.log(result)


