const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ')

const number = input.map(Number)
const arr = [];
const f = (num)=>{          //소수 구하는 함수
    if(num<2){
        return false
    }
    for(let i=2;i<=Math.floor(Math.sqrt(num));i++){
        if(num%i===0){
            return false
        }
    }
    return true
}

for(let i = number[0]; i<=number[1]; i++){
    if(f(i)){
        arr.push(i)
    }
}
console.log(arr.join('\n'))