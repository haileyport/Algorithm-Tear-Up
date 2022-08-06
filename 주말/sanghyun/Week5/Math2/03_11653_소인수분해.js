let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim();
let input = fs.readFileSync('./03_11653.txt').toString().trim();


function solution (income){
  let n = Number(income);
  let result = ''
  if(n === 1){
    return '';
  }
  let divider = 2;
  // console.log(`초기 나누기 ${divider}`);
  while(n > 1){
    if (n % divider === 0){
      n = n/divider;
      // console.log(n)
      result += divider + '\n'
    }else{
      divider++;
    }
  }
  console.log(result);
}
solution(input);

