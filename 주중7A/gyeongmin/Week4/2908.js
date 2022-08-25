let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
//console.log(input) //['734 893']

let arr = input[0].split(" ") //['734', '893']
let A = arr[0]
let B = arr[1]
let reverseA = A.toString().split("").reverse().join("") //437
let reverseB = B.toString().split("").reverse().join("") //398
console.log(Math.max(reverseA, reverseB))
