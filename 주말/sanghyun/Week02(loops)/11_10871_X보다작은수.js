let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('./11_10871.txt').toString().split('\n');

// 결과값 변수
let result = ''
// 첫번째 줄에서 받는 숫자는 두번재 줄에 나올 숫자의 개수이자 반복해서 확인할 수
let numberLoop = Number(input[0].split(' ')[0]);
// 두번째 줄의 숫자와 비교할 숫자
let numberJudge = Number(input[0].split(' ')[1]);
// 두번째 줄을 배열로 전환
let searcFor = input[1].split(' ');


function solution(incomForLoop, incomForJudge){
  for (let i = 0 ; i < incomForLoop; i++ ){
    if(Number(searcFor[i]) < incomForJudge){
      result += Number(searcFor[i]) + ' ';
    }
  }
}
solution(numberLoop, numberJudge);
console.log(result);