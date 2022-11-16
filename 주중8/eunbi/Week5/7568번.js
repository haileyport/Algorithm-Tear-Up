let fs = require('fs');
const { format } = require('path');
const { isGeneratorFunction } = require('util/types');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = fs.readFileSync('test.txt').toString( ).trim().split('\n');

// 백준 7568번 , 덩치
// 실버 5/ 9356 KB/ 124ms

// 각 학생의 키와 몸무게가 줄마다 담긴 입력값을 받아 비교하며 등수 매기기 
// 키와 몸무게 둘 다 비교대상보다 커야 덩치가 크다고 판단!, 둘 중 하나만 크다면 같은 등수

// 입력값을 개행 기준 split을 이용하여 배열로 나눠준다. => ['55 185', '58 183' ...]
// 문자열을 나누어 담은 배열을 다시 공백기준으로 구분하여 배열로 나눠준다 => [['55','185'] , ['58', '183'] ...]
// forEach를 이용하여 각 요소들을 number로 형변환해준다(parseInt이용)
// map, 반복문(for)을 이용해 배열의 0번을 몸무게(w), 1번을 키(h)로 모든 요소와 비교한다. 
// 등수를 의미하는 grade를 선언 후 1로 초기화해준다
// w,h가 비교대상의 w,h보다 작다면 grade++ 
// 반복문이 끝나면 el(반복했던 요소)을 grade로 재할당(값 변경)
// 배열을 공백을 더해 문자열로 출력해준다, 첫 줄로 출력해야하므로 join(' ')이용해보자

// 틀림 왜? -> 아마 input에 계속해서 재할당하여그런듯...백준 지대짜증난다...
// map 이용시에는 항상 변수에 저장해주자!
// forEach는 undefined 반환 -> 아직도 어떻게 써야할지 모르겠다...

// input = input.map(el => el.split(' ').map(el => parseInt(el))); 

// let result = input.map(el=> {
//   let grade = 1;
//   for(let i = 0; i < input.length; i++){
//     let w = el[0]; //weight
//     let h = el[1]; // height
//     let w1 = input[i][0]
//     let h1 = input[i][1]

//     if(el !== input[i]){
//       if(w < w1 && h < h1){
//         grade++;
//       }
//     }
//   }
//   // 함수는 return 꼭 해주자..! 
//   return el = grade;
// })

// console.log(result.join(' '));

const arr = (input.map(el => el.split(' ').map(el => parseInt(el))));
arr.shift();
const result = [];

for(let i = 0; i < arr.length; i++){
  let grade = 1;
  for(let j = 0; j < arr.length; j++){
    if(i !== j){
      if(arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) grade++;
    }
  }
  result.push(grade);
}

console.log(result.join(" "));
