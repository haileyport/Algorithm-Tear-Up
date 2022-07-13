const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split();

//console.log(input);
//input = [ '5' ]

let n = input[0];
let result = '';

for (let i = 1; i <= n; i++) {
    console.log(result+'*');
    result = result + '*';
}

//console.log(result);