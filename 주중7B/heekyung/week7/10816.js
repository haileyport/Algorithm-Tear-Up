let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const testCase = input[0]
const test1 = input[1].split(' ').map(Number)
const testCase2 = input[2]
const test2 = input[3].split(' ').map(Number)

let object = {}
test2.forEach(i=>{
    object[i] = 0

    test1.forEach(v=>{

        if(v === i){
            object[i] ++
        }
    })
})

const result = test2.map(v=> object[v])
console.log(result.join(' '))
//시간초괗ㅎ