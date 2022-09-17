let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('./01_2750.txt').toString().trim().split('\n');

// 지식 블로그: https://velog.io/@jakeseo_me/Javascript-Sort%ED%95%A8%EC%88%98%EC%97%90-%EB%8C%80%ED%95%9C-%EC%9E%A1%EC%A7%80%EC%8B%9D

const solution = (income) => {
  let result = ''
  income.shift();
  (income.map(el => Number(el)).sort((a,b) => a - b).map(el => result += el + '\n'))
  console.log(result);

}
solution(input)