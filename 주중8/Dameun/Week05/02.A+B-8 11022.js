let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let inputNumber = input.slice(1)
let Numbers = [];

for(let n of inputNumber){
    Numbers.push(n.split(' ').map(Number))
}

for(let m =0; m<Numbers.length; m++){
    let result = `Case #${m+1}: ${Numbers[m][0]} + ${Numbers[m][1]} = ${Numbers[m][0] + Numbers[m][1]}`
    console.log(result);
}