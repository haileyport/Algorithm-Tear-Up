const input = require('fs').readFileSync('/dev/stdin').toString()


function pattern(num){
    if (num === 0){
        return ''
    }
    if(num % 3 === 0 ){
    	    return `***`+pattern(num-1)
    }else {return pattern(num-1)}

}
function pattern2(num){
	if(num===0){
		return ''
	}
	   if(num % 3 === 0 ){
	return `* *`+pattern2(num-1)
	   	
	   }else {return pattern2(num-1)}
 }
 
 function nonePattern(num){
 	if (num === 0){
        return ''
    }
    if(num % 3 === 0 ){
    	    return `   `+nonePattern(num-1)
    }else {return nonePattern(num-1)}
 }

function patternWarp(num){
	return pattern(num)+'\n'+pattern2(num)+'\n'+pattern(num)

}
function nonepatternWarp2(num){
	return nonePattern(num)+'\n'+nonePattern(num)+'\n'+nonePattern(num)
}

// function patternNoneSpace(num){
// 	return patternWarp(num)+'\n'+nonepatternWarp2(num)
// }
console.log(patternWarp(input))
//첫번째 줄 완성 ..다음줄은..
