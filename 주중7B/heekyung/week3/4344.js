
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

const testCase = input.shift();

const avg =[]

input.forEach((i) => {
	avg.push(i.split(' '))
})
	const avgnum = []
const number =[]
const avgTestCase = []
//[ '5', '7', '3', '3', '9' ]
avg.forEach((e) =>{
	avgTestCase.push(e.shift());
	number.push(e.map(Number));

})
	
	const goodstudent =[0,0,0,0,0]
	for(i=0; i<number.length ; i++ ){
		avgnum.push((number[i].reduce((acc,cur)=>acc+cur))/avgTestCase[i])
		for(j=0; j < number[i].length; j++){
			if (number[i][j] > avgnum[i]){
				goodstudent[i] ++
				//[ 2, 4, 1, 2, 5 ]
			}
		}
	}
	let result=[]

	for (i =0; i<avgTestCase.length; i++){
		result.push(((goodstudent[i] / avgTestCase[i]) * 100 ).toFixed(3))
	}

console.log(result + '%');
