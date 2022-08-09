let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input)
let newarr =[]

for(let j = 2; j<=num; j ++){
    
    while(num%j===0){
        num = num/j
        newarr.push(j)
    }
}

console.log(newarr.join("\n"))