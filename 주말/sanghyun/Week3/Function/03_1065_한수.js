/* 
등차수열이면 한수로 간주 -> 한수의 개수를 반환
조건1 1번부터 99번은 무건 한수
조건2 100번부터는 1000까지는 (백의 자리 - 십의 자리) === (십의 자리 - 일의 자리)
- 123 ->  (1 - 2)   (2 - 3)

입력값은 숫자 & 출력값은 숫자 

1 2 3 4 5 6 7

10 1 0
11 1 1
12 1 2
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split();
let input = fs.readFileSync('./03_1065.txt').toString().trim().split();

let numChanged = Number(input);
// console.log(numChanged);

function solution(num) {
  let count = 0;
  // 한 자리 그리고 두 자리 숫자는 모두 한수로 count, 따라서 99 밑의 숫자가 나온다면 그 숫자 자체가 num임
  if (num < 100) {
    count = num;
    return count;
  }
  // 세 자리 숫자부터는
  // 일의 자리, 십의 자리, 백의 자리 서로 비교가 필요
  else if (num >= 100){
    count = 99;
    for (let i = 100; i <= num; i++){
      let hundredNumber = Number(String(i)[0]);
      let tenNumber = Number(String(i)[1]);
      let oneNumber = Number(String(i)[2]);
      if(hundredNumber - tenNumber === tenNumber - oneNumber){
        count++
      }
    }
    return count; 
  }
}
console.log(solution(numChanged));
