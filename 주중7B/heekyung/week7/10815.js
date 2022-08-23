let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const testCase = input[0]
const test1 = input[1].split(' ').map(Number)
const testCase2 = input[2]
const test2 = input[3].split(' ').map(Number)

let object = {}
for(i=0; i<test2.length; i++ ){
    for(j=0; j<test1.length; j++){
        
        if(test2[i] === test1[j]){
           object[test2[i]] = 1
        }
    }
    if( !object[test2[i]]){
        object[test2[i]] = 0
    }
}

const result = test2.map(v=> object[v])
console.log(result.join(' '))