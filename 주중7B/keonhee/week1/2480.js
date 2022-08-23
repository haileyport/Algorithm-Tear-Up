// 주사위 세개
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
input = input.map((num) => Number(num));
let [a, b, c] = input;
function solution(a, b, c) {
  // 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원 ( a === b === c)
  // 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원 ( a === b , b === c , a === c)
  // 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원 (else cases)
  let len = [...new Set([a, b, c])].length;
  // [array]
  // 2개못
  let hashMap = {};
  for (let num of [a, b, c]) {
    if (!hashMap[num]) {
      hashMap[num] = 1;
    } else {
      hashMap[num] += 1;
    }
  }
  if (len === 1) {
    console.log(10000 + a * 1000);
  } else if (len === 2) {
    for (key in hashMap) {
      if (hashMap[key] >= 2) {
        console.log(1000 + key * 100);
      }
    }
  } else {
    let maxNumber = Math.max(a, b, c);
    console.log(maxNumber * 100);
  }
}
solution(a, b, c);
