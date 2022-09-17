/*
통과 여부 : 통과!
시간 복잡도 : 9336 KB
공간 복잡도 : 124 mb

[문제]
문제 : 7568번 덩치 / 브론즈2
몸무게 x kg
키 y cm
몸무게와 키 모두 크면 덩치가 더 크다.
반반이면 덩치를 비교할 수 없다.

입력 :
    - 첫째 줄 : N명
    - 둘째 줄~N+1째 줄 : 몸무게 x와 키 y

출력 : 덩치 등수를 한 줄에 나열 - 공백으로 구분

[개념]
- 브루트 포스 : 모두 탐색하면서 요구 조건에 충족되는 결과 가져오기 

[아이디어]
1. 몸무게랑 키를 저장하고 비교할까?
2. 질 때마다 카운트를 늘릴까?
3. 등수를 어떻게 옮겨볼까?
4. 이길 때마다 빼면 되지 않을까!?1?
5. 동일 등수를 어떻게 처리하지??

[유사 코드]
1. 입력 받기
    - 첫째 줄 N명 => N
    - 그 이후는 => person
2. 2차원 배열 형태이므로 이중 반복문
    - 처음에 값 집어넣기
    - for) 행을 차차 내리기
    - for) kg와 cm 비교하기
        - 같다면 스킵

[틀린 이유]
- 결과 공백 처리 안해줘서
- 부등호 방향 반대로 해서
*/

//1. 입력 받기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
//let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

let N = input.shift();  // 첫번째 수 받아서 제거
let person = input.map(num => num.split(' ').map(num => +num));

// console.log('입력 잘 들어왔나요? 네~', N, person);

let kg, cm, grade = 0;
let result = [];
for (let i = 0; i < N; i++) {       // 행 순회
    grade = 1;
    kg = person[i][0];              // 몸무게 할당
    cm = person[i][1];              // 키 할당
    for (let j = 0; j < N; j++) {
        if(i === j) continue;
        if(person[j][0]>kg && person[j][1]>cm){    // 현재 보고 있는 행이 덩치가 크다면
            grade++;
        }
    }
    result.push(grade);
}
console.log(result.join(' '));