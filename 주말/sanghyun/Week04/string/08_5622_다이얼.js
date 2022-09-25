let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('');
let input = fs.readFileSync('./08_5622.txt').toString().trim().split('');

let arr = [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I'], ['J', 'K', 'L'], ['M', 'N', 'O'], ['P', 'Q', 'R', 'S'] , ['T', 'U', 'V'], ['W', 'X', 'Y', 'Z']];

// console.log(arr[7].includes(input[0]));
console.log(input.length)
let count = 0;
for(let i = 0; i < input.length; i++){
  console.log('input:' + i)
  for(let j = 0; j < arr.length; j++){
    if(arr[j].includes(input[i])){
      console.log('arr: ' + j)
      count+= j + 3;
      console.log(count);
    }
  }
}
console.log(count);
