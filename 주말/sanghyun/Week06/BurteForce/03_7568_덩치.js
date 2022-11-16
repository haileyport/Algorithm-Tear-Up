let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('./03_7568.txt').toString().trim().split('\n');

const solution = (income) => {
  let sliced = income.slice(1, income.length);
  console.log(sliced);
  let big = 0
  let result = '';
  for(let i = 0; i < sliced.length; i++){
    let x = (sliced[i].split(' ').map(el => Number(el))[0]);
    let y = (sliced[i].split(' ').map(el => Number(el))[1]);
    for(let j = i + 1; j < sliced.length; j++){
      let q = (sliced[j].split(' ').map(el => Number(el))[0]);
      let r = (sliced[j].split(' ').map(el => Number(el))[1]);
      console.log(`현제 보는 x는${x} y는${y}`)
      console.log(`q는 ${q} r은 ${r}`)
      if(x > q && y > r){
        big++
      }
    }
    result += big + '\n';
  }
  console.log(result);
}
solution(input)