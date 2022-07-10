let fs = require('fs');
let input = fs.readFileSync('input.txt').toString();

let step = parseInt(input);

for(let i = 1; i <= 9; i++){
    // console.log(`${input} * ${i} = ${input * i}`);
    console.log(step + ' * ' + i + ' = ' + step * i);
}
