const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

let a=input[0].split("").map(v => Number(v))


let lowsorted = a.sort(function(a,b) {
    return b-a
    })
let sum = lowsorted.join('')
console.log(sum)