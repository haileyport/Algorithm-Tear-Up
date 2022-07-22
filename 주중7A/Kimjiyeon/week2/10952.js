let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");
let numbers = [];
let output = [];

for(let i=0; i<input.length; i++){
    numbers.push(input[i].split(" "));
    let num1 = Number(numbers[i][0]);
    let num2 = Number(numbers[i][1]);
    
    if(num1===0&&num2===0){
        break;
    }
    output.push(num1+num2);
}
console.log(output.join("\n"))