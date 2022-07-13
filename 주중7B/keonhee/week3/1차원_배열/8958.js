const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [input1, ...input2] = input;

input1 = +input1;

function solution(num, arrays) {
  let result = new Array(num).fill(0);
  let count = 0;

  arrays.map((arr, i) => {
    let newArr = [];
    arr = arr.split('');

    arr.map((item) => {
      // item 이 'O' 일때 누적으로 count 1씩 더해준다.
      if (item === 'O') {
        count += 1;
      } else {
        count = 0;
      }

      newArr.push(count);
    });
    // 배열 인덱스가 바뀔때 count 초기화
    count = 0;

    // result 에 인덱스에 맞는 배열 안의 sum 을 저장한다.
    result[i] = newArr.reduce((a, b) => a + b);
  });

  result.forEach((num) => console.log(num));
}
solution(input1, input2);
