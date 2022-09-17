let fs = require('fs');
const { format } = require('path');
const { isGeneratorFunction } = require('util/types');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString( ).trim().split('\n');

// 백준 8958번, OX퀴즈 
// 브론즈 2/ 9356 KB/ 128 ms

// *의사코드*
// slice로 개수를 나타내는 첫 요소를 제외한 arr 배열 생성
// arr.map을 이용하여 배열의 모든 요소를 돌고, for문을 이용해 각 요소 안의 요소들을 반복해 돈다 
// => 결과를 반환할 result 변수에 리턴값 할당(map을 통해 나올 새 배열이 저장됨)
// map의 실행문에 count,sum 두 개의 변수를 선언, 0으로 초기화 
// count는 'O'의 연속되는 값을 저장, sum은 'O'으로 부터 나오는 점수들의 합을 저장하는 변수이다. 
// 조건으로 요소가 'O'이면 count++ 아니면, count = 0
// for문이 끝나면 sum을 리턴함으로써 result배열에 각 요소별 점수들을 저장시킨다.
// join('\n')을 이용하여 개행으로 값 출력

const arr = input.slice(1);

const result = arr.map(el => {
  let count = 0;
  let sum = 0;

  for(let i = 0; i < el.length; i++){
    if(el[i] === 'O'){
      count++; 
      sum += count; 
    }else{
      count = 0;
    }
  }
  return sum;
})

console.log(result.join('\n'));

