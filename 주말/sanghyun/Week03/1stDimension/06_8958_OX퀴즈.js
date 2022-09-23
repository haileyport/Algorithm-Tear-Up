let fs = require('fs');

// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('./06_8958.txt').toString().trim().split('\n');

// 각 라인을 불러옴
// 각 라인에서 0을
let output = '';
for (let x = 1 ; x < input.length; x++){
  let result = 0;
  let count = 0;
  for (let i in input[x]){
    // console.log(input[x][i])
    if(input[x][i] === 'O'){
      // console.log('matched = ' + input[2][i])
      count ++;
      result = result + count
      // console.log(count);
    }else{
      // console.log('중간집계' + result);
      count = 0;
    }
  }
  // console.log(result);
  output += result + '\n';
}
console.log(output);
