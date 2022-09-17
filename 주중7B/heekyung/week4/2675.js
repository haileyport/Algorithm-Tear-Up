const input = require("fs").readFileSync("/dev/stdin").toString().split('\n');

const splitArr = input.map(i=>  i.split(' '))

// for(i=0; i<splitArr[0]; i++){

// }
splitArr.shift();
let testCase = []
let repeatText = []
let result=[]
for(i=0; i<splitArr.length ; i++ ){
	testCase.push(splitArr[i][0])
	repeatText.push(splitArr[i][1])
}
const arrText = repeatText.map( i => {
	return i.split('')
})
for (i = 0; i<arrText.length ; i++){
	for(j=0; j<arrText[i].length; j++){
		result.push(arrText[i][j].repeat(testCase[i]))	
		
	}
	result.push('\n')

}
	console.log(result.join(''))

