let input = require("fs").readFileSync("/dev/stdin").toString().split('\n')

const testCase = input.shift();
let count = 0;
let result = 0;

for(i=0; i<input.length; i++){
	const iArr = input[i].split('')
    if(iArr[i] !== iArr[i+1] ){
        for(j=i; j<input[i].length; j++){
            
		if(iArr[i] === iArr[j+2] && iArr[j+2] !== undefined ){
           count++
    	} 
	
    }
    
    } 
    if(count === 0) {
        result++
    }
    count = 0


}
console.log(result)

//틀림