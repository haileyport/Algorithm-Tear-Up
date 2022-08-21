const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

let num = input[0] * input[1] * input[2]
let numarr = num.toString().split('')
let result = []
let j = 0;
function numCount(myCount){
    let count = 0
    for (i = 0; i < numarr.length; i++){
        if (myCount === Number(numarr[i])){
            count++
        }
    }
    return count
}

while ( j < 10) {
    console.log(numCount(j))
    j++
}

