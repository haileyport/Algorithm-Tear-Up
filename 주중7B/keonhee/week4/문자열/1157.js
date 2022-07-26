const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input[0];

function solution(str) {
  // 소문자로 일괄 변경해준다.
  str = str.toLowerCase().split('');

  const hash = {};
  const result = [];
  let maxNumber = [];

  str.map((cha) => {
    // hash 객체에 character 와 나온 숫자 key : value 값으로 할당
    !hash[cha] ? (hash[cha] = 1) : hash[cha]++;

    maxNumber.push(Number(hash[cha]));
  });

  // 비교 대상이 되는 maxNumber 구해준다.
  maxNumber = Math.max(...maxNumber);

  // 객체 { } 상태 Object.entries() 사용 해서 map() 사용한다.

  Object.keys(hash).map((key) => {
    // value 값이 maxNumber 와 같으면 결과 배열에 넣어준다.
    if (hash[key] === maxNumber) {
      // 대문자로 출력하기 위해 대문자로 배열에 push
      result.push(key.toUpperCase());
    }
  });

  result.length > 1 ? console.log('?') : console.log(result[0]);
}

solution(input);
