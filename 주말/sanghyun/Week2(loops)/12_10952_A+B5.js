let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('./12_10952.txt').toString().split('\n');

let result = ''
let numberLoop = input.length;
// console.log(input[0].split(' '))
// console.log(input[0].split(' ')[0])

for (let i = 0; i < numberLoop; i++){
  let numbersToUSe = input[i].split(' ');
  if(numbersToUSe[0] !== '0' && numbersToUSe[1] !== '0'){
    let sum = Number(numbersToUSe[0]) + Number(numbersToUSe[1])
    result += `${sum}\n` 
  }else{
    break;
  }
}
console.log(result);