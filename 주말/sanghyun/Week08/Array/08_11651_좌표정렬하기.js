let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');;
let input = fs.readFileSync('./08_11651.txt').toString().trim().split('\n');

function solution(income){
  let axis = income.slice(1).map(el => el.split(' ').map(Number));

  let result = (axis.sort((a, b) => {
    if(a[1] !== b[1]){
      return a[1] - b[1];
    }else if (a[1] === b[1]){
      return a[0] - b[0];
    }
  }
  ));
  let final = ''
  result.map(el => {
    final += `${el[0]} ${el[1]}` + '\n'; 
  });
  console.log(final);
}
solution(input)
