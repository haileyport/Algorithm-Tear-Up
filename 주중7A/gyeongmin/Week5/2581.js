let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let M = parseInt(input[0]) //60
let N = parseInt(input[1]) //100

let sum = 0;
let arr = [];
function isPrime(num){
    if(num === 2) return true;
    if(num === 1 || num%2 === 0) return false;
    for(let i = 3; i < parseInt(num); i++){
        if(num%i === 0) return false;
    }
    return true;
}
for(let i = M; i <= N; i++){
    if(isPrime(i)) {
        arr.push(i)
        sum+= i;   
    }   
}
if(arr.length === 0) console.log(-1)
else{
    console.log(sum)
    console.log(arr[0])
}
