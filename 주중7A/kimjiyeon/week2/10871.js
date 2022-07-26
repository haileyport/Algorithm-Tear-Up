let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");
let count = input[0].split(' ');
let numbers = input[1].split(' ');
let output = [];

for(let i =0; i<count[0];i++){
    if(Number(numbers[i])<Number(count[1])){
        output.push(numbers[i])
   }
}
console.log(output.join(" "))