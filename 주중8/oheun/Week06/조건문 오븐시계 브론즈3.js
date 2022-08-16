/*
통과 여부 : 통과!
시간 복잡도 : 124ms
공간 복잡도 : 9336 KB

input :
1) 첫째 줄 현재 시각
2) 두 번째 줄 요리하는데 필요한 시간

output :
1) 첫째 줄에 종료되는 시각의 시와 분

* 의사 코드
1. 입력 받기
2. 조건문
    2.1. 분이 59를 넘기면 올린다
    2.2. 시간이 23을 넘기면 올린다

*/

//1. 입력 받기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

// Number형으로 변경
let time = Number(input[0].split(" ")[0]);
let minute = Number(input[0].split(" ")[1]);
let cook = Number(input[1]);

// console.log(time, minute, cook);

// 조건문
let result = minute + cook;
if (result >= 60) {
  // 60분을 초과한다면
  // 아 나머지로 계산하는 게 있었네 (성훈님 발표 참고)
  minute = result - 60 * parseInt(result / 60);
  time += parseInt(result / 60); // 추가된 시간을 60분으로 나눴을 때의 정수 = 시간

  if (time >= 24) {
    time -= 24;
  }
  
  console.log(time, minute);
  
} else {
  console.log(time, result);
}

