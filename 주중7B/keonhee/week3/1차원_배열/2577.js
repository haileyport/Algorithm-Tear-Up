const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let array = input.map(Number);

function solution(array) {
  // 세개의 자연수 a,b,c 가 주어줌
  // a * b * c 를 계산한 결과에 0 에서 9 까지 각각 숫자가 몇번씩 쓰였는지 구함
  //  A = 150, B = 266, C = 427 A × B × C = 150 × 266 × 427 = 17037300
  // 17037300 에는 0이 3번, 1이 1번, 3이 2번, 7이 2

  // length 10의 array 생성
  let arr = new Array(10).fill(0);

  // array 안의 요소들의 곱을 sum 에 저장
  let sum = array.reduce((a, b) => a * b);

  // 문자열로 변환뒤 split
  let splited = String(sum).split('');

  // splited 내부 접근 해서 arr 에 각 인덱스에 몇번 나왔는지 저장
  splited.map((item, i) => {
    item = Number(item);

    arr[item]++;
  });

  arr.forEach((item) => console.log(item));
}

solution(array);
