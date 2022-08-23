//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);;
let input = require('fs').readFileSync('예제.txt').toString().split('\n');

let test = input[0]; //5

for(let i = 1; i <= test; i++){
  let numbers = input[i].split(' ')
  let sum = 0;
  for(j = 1; j < numbers.length; j++){
    //console.log(input[i][j])
    sum += Number(numbers[j]);
  }
  let average = sum/numbers[0];
  let count = numbers.filter(number => number > average).length;
  //console.log(average)
  //console.log(count)
  let num = (count/numbers[0])*100
  console.log(`${num.toFixed(3)}%`)
}
