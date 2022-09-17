let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
//let input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');
//console.log(input[0]) 


let arr = [0, 1];

for(let i = 0; i < input[0] - 1; i++){
    if(input[0] === 0){
        console.log(arr[0]);
    }else if(input[0] === 1){
        console.log(arr[1]);
    }
    arr.push(arr[i] + arr[i + 1])
}

console.log(arr[input[0]])
