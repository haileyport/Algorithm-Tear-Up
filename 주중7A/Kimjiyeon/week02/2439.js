let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString();

let count = Number(input);
for(let i = 1; i<=count;i++){
    console.log(" ".repeat(count-i)+"*".repeat(i));
}