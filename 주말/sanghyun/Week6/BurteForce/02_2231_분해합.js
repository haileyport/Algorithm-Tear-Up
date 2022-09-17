let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim()
let input = fs.readFileSync('./02_2231.txt').toString().trim()

const solution = (income) => {
  let targetNum = Number(income)
  let arr = [];

  
  for (let i = 0; i <= 1000000; i++) {
    let stringNum = String(i); //'198'
    let result = i; // 198
    for (let j = 0; j < stringNum.length; j++) {
      result += Number(stringNum[j]) // 198 + 1 + 9 + 8
      // 분해합이 완성되었을 경우를 판별
      if (j === (stringNum.length - 1) && result === targetNum) {
        arr.push(i);
      }
    }
  }

  console.log(arr);
  if (arr.length !== 0) {
    console.log(arr[0]);
  } else {
    console.log(0);
  }
}

solution(input)