//let input = require('fs').readFileSync('예제.txt').toString().trim().split('\n').toString();
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').toString();
//console.log(input)

//console.log(input.toString()) //ababc
let arr = [];
for(let i = 0; i < input.length; i++){
    arr.push(input[i])
    for(let j = 2; j < input.length; j++){
        arr.push(input.slice(i,i+j))
    }
    arr.push(input)
}
let answer = [...new Set(arr)]
console.log(answer.length)
