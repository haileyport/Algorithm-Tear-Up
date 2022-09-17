let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

const testCase = input.shift();
let minNum = input[0]
let numIdx = 0
while(input.length !== 0){
    for(i=0; i<input.length; i++){
        if(input[i]<=minNum){
            minNum= input[i]
            numIdx = i
        }
    }
  console.log(minNum)
    input = input.filter((el) => el !== minNum)
	minNum = input[0]
}


// // sort 사용
// input.sort()
// console.log(input.join('\n'))

// //sort사용은 틀림나옴