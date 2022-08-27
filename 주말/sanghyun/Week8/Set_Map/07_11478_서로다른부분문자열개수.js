let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('');
let input = fs.readFileSync('./07_11478.txt').toString().trim().split('');

// 먼저 문자열에서 뽑아낼 문자의 개수를 정함(예: 1개를 뽑을건지, 2개를 뽑을 건지)
// 

function solution (income){
  let result = []
  for(let i = 0; i <= income.length; i++){
    let end = 1 + i
    for(let j = 0; j < income.length; j++){
      if(end > income.length){
        break;
      }
      result.push(income.slice(j, end).join(''))
      end ++
    }    
  }
  console.log(new Set(result).size);
}

solution(input)