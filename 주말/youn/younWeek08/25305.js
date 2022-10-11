const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");


let a = input[0].split(" ")
let b =input[1].split(" ").map(v => Number(v))
let numsorted = b.sort(function(a,b){
    return a-b
})
let result = b.slice(-a[1])
console.log(Math.min(...result))