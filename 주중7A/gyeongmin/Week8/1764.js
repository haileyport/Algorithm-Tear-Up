//let input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0].split(' ')[0]);

let pocketmon = input.slice(1, N+1);
let pocketmonMap = new Map(pocketmon.map((v,i)=> [v,i+1]))
let test = input.slice(N+1)

let result = ''

test.forEach(q=> {
    if (isNaN(q)) { 
        result += pocketmonMap.get(q) + '\n'; 
    } else { //숫자일때
        result += pocketmon[q-1] + '\n'; 
    }
});
console.log(result.trim())
