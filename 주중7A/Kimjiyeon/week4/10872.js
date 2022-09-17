const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

const num = Number(input)

function factorial(x){
    if(x<=1){
        return 1
    }
    return x * factorial(x-1)
}

console.log(factorial(num))