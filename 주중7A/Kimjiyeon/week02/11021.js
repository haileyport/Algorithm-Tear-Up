let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let numbers = [];

for(let i = 1; i <input.length; i++){
    if(input[i]!==''){
        numbers.push(input[i].split(' '));
    }
}
for(let i = 0; i<numbers.length;i++){
    let num1 = Number(numbers[i][0]);
    let num2 = Number(numbers[i][1]);
    let sum = num1+num2
    console.log(`Case #${i+1}: ${sum}`)
}