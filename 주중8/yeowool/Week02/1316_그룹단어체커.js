// 문자열  1316  그룹 단어 체커
// 난이도 : 실버5  
// 풀이시간 : 00 분
// 메모리 : 	9484 KB      
// 시간 :  128 ms      
// 코드길이 : 522 B

// 그룹단어 거를 수 있는 규칙 찾기

// 수도코드
// 1. 입력을 받을 값들을 arr 변수에 할당
// 2. 그룹 문자열이 아닌 문자열을 찾을 때 마다 -1을 해서 정답을 return하기 위해 answer 변수에 arr의 length를 할당
// 3. arr배열 변수를 순회하면서 temp라는 변수에 arr의 첫 번째 값의 문자열의 첫 번째 문자를 할당
// 4. 이중 for문은 두번째 문자 즉, 1번 index부터 순회
// 5. 두번째 for문에서 순회 하면서 temp 문자열 변수에 현재 순회하는 문자가 들어가 있는데 
//     !(includes)과 같이 않다면 answer배열에서 -1을 해주도록 하고 이미 그룹 문자열이 아닌 게 확인이 되었으니  
//      break 해서 현재 for문을 중지하고 빠져나간다


const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const arr = [];

for (let i = 1; i < input.length; i++) {
  arr.push(input[i]);
}

let answer = arr.length; 
let temp = '';

arr.forEach((item) => {
  temp = item[0];
  for (let i = 1; i < item.length; i++) {
    if (temp.includes(item[i]) && item[i - 1] !== item[i]) {
      answer--;
      break;
    }
    temp += item[i];
  }
});

console.log(answer);
