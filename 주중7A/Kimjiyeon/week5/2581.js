// 자연수 M과 N이 주어질 때 M이상 N이하의 자연수 중 소수인 것을 모두 골라 이들 소수의 합과 최솟값을 찾는 프로그램을 작성하시오.

// 예를 들어 M=60, N=100인 경우 60이상 100이하의 자연수 중 소수는 61, 67, 71, 73, 79, 83, 89, 97 총 8개가 있으므로, 이들 소수의 합은 620이고, 최솟값은 61이 된다.
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const number = input.map(x=>Number(x))

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
let sum = arr.reduce((a,b)=>a+b,0)
if(arr===[]||arr.length === 0){
    console.log(-1)
}else{
    console.log(sum)
    console.log(arr[0])
}