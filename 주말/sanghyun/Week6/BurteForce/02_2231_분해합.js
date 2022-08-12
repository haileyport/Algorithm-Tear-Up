let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim()
let input = fs.readFileSync('./02_2231.txt').toString().trim()

const solution = (income) => {
  let targetNum = Number(income)
  let arr = [];

  // 10미만은 그냥 그 자체를 출력
  for (let i = 0; i <= 1000000; i++) {
    let stringNum = String(i);
    let result = i;
    for (let j = 0; j < stringNum.length; j++) {
      result += Number(stringNum[j])
      if (j === (stringNum.length - 1) && result === targetNum) {
        arr.push(i);
      }
    }
  }

  // console.log(arr);
  if (arr.length !== 0) {
    console.log(arr[0]);
  } else {
    console.log(0);
  }
}
solution(input)