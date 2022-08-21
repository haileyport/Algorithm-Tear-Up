const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let num1 =input.shift()


 const sortes = input.sort((a,b)=> a - b);
 
console.log(sortes.join("\n"))
    