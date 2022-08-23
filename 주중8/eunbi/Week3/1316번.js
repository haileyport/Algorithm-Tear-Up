let fs = require('fs');
const { format } = require('path');
// let input = fs.readFileSync('/dev/stdin').toString().trim();
let input = fs.readFileSync('test.txt').toString( ).trim();

// 백준 1316번, 그룹 단어 체커 
// 실버5 / 9352KB / 124ms

// 그룹단어 : 단어에 존재하는 모든 문자 중 각 문자가 연속해서 나타나는 경우
// 1. split(\n)을 이용하여 배열로 문자열을 받아온다 
// 2. 그룹단어의 개수를 카운트해줄 count 변수 선언 및 초기화 
// 3. 케이스(단어)마다 각 문자를 돌도록 이중 반복문 생성
// 4. 케이스가 바뀔 때마다 중복문자 확인을 위한 temp 배열을 빈배열로 선언 및 초기화 해준다. 
// 5. 각 문자를 돌 때마다 현재 문자와 그 다음 문자가 다른지 비교, 다르다면 temp에 그 문자가 있는지 확인함으로써 그룹 단어인지 아닌지 유추한다. 
// 6. 단어가 그룹단어가 아니라면 temp에 'none' 요소를 할당해주며 반복문을 빠져나오고, temp내 요소를 이용하여 그룹단어인지 아닌지 유추함으로써 카운트 증감

let words = (input.split('\n'));
let count = 0;

for(let i = 1; i <= parseInt(words[0]); i++){
// 중복요소 확인용 배열  
  let temp = [];

  for(let j = 0; j < words[i].length; j++){
    if((words[i][j] !== words[i][j+1]) && (!temp.includes(words[i][j]))){
        temp.push(words[i][j]);
    } else if((words[i][j] !== words[i][j+1]) && (temp.includes(words[i][j]))){
      temp = ['none']; 
      break;
    }
  }

  if(!temp.includes('none')){
    count++;
  }
}

console.log(count);

