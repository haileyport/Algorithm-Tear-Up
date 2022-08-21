let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const testCase = input.shift()

const set = new Set(input);
const uniqueArr = [...set]

let resultArr = uniqueArr.sort((a,b)=>{
    if(a.length < b.length) return -1
    if(a.length > b.length) return 1;
    if (a > b) return 1;
    if (a < b) return -1;
        //문자열 사전식 정렬
     return 0
})

console.log(resultArr.join('\n'))
