let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('./13_10951.txt').toString().split('\n');

let numberLoop = input.length;
console.log(input);
console.log(numberLoop);


for (let i = 0; i < numberLoop -1; i++){
  let numbersToUSe = input[i].split(' ');
  // console.log(numbersToUSe);
  let sum = (Number(numbersToUSe[0]) + Number(numbersToUSe[1]));
  console.log(sum);
}
