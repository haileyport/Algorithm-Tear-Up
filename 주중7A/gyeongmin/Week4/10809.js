let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(input) //['baekjoon']

let arr = [];
let result = '';
//출력: 공백을 두고 index값을 출력
//A~Z까지 나열하고 입력값의 index를 비교해가면서 넣어주기
//S에 알파벳이 있다면 index값을 넣어주기
//indexOf는 값이 없으면 -1 반환
for (let i = 97; i <= 122; i++) {
    let az = String.fromCharCode(i);
    
    for (let j = 0; j < input.length; j++) {
      arr.push(input[j].indexOf(az));
    }
  }
  result = arr.join(' ');
  console.log(result)
