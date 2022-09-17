const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const count = Number(input[0]);
input[1] = input[1].split(' ')
const example = input[1].map(Number);

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


const result = example.filter(x=>f(x))
console.log(result.length)