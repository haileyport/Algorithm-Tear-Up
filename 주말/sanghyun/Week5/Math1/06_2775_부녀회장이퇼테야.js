let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('./06_2775.txt').toString().trim().split('\n').map(el => Number(el));

// console.log(input);

/*
    1호 2호 3호
2층: 1  4  10
1층: 1  3  6
0층: 1  2  3
*/

const solution = (income) => {
  let slicedIncome = income.slice(1, income.length)
  // console.log(slicedIncome);
  for(let i = 0; i < slicedIncome.length; i += 2){
    let targetFloor = slicedIncome[i];
    let targetRoom = slicedIncome[i + 1];
    let zeroFloor = [];
    for (let i = 1; i <= targetRoom; i++){
      zeroFloor.push(i);
    }
    
    

  }

}
solution(input);