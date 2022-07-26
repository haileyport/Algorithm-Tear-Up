let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");
let numbers = [];
let output = [];

for(let i=0; i<input.length-1; i++){
    numbers.push(input[i].split(" "));
    let num1 = Number(numbers[i][0]);
    let num2 = Number(numbers[i][1]);
    
    output.push(num1+num2);
}
console.log(output.join("\n"))