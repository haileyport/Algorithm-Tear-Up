let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim();
let input = fs.readFileSync('./05_1157.txt').toString().trim();

// 1. 문자열을 소문자로 전환하고 고유값을 추출
// 2. 소문자 문자열을 하나씩 조회하여 고유값이 몇개있는 지 확인(for문 아니면 filter) 
// 3. 같은 값이 있다면 ?, 하나만 최고면 그 문자열 대문자로 출력

let uniquePick = [...new Set(input.toLowerCase())];
let toFindArr = input.toLowerCase().split('')
let count = 0;
let mostString = ''
for(let i = 0; i < uniquePick.length; i++){
  let promptCount = toFindArr.filter(el => el === uniquePick[i]).length;
  if(count === promptCount){
    mostString = '?';
  }else if(promptCount > count){
    count = promptCount 
    mostString = uniquePick[i];
  }
}
console.log(mostString.toUpperCase());