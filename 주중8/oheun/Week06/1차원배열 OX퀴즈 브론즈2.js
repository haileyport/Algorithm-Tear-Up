/*
통과 여부 : 통과
시간 복잡도 : 120ms
공간 복잡도 : 9344 KB

input :
1) 첫째 줄 테스트 케이스의 개수
2) 각 줄에 OX

output :
1) 점수

* 의사 코드
1. 입력 받기
2. 반복문
    2.1. 각 행을 배열의 길이만큼 실행하기
    2.2. 연속된 점수일 경우 추가로 더하기
        2.2.1. 어떻게 체크할까?
            나올 때마다 count를 올리고 그 count를 점수에 추가하기
        2.2.2. 반복문 끝나고 배열에 push

* 아이디어
1) 팩토리얼 느낌인데 반복문에서 어떻게 하더라

* 틀린 이유
    - 0번째 케이스 때문인 것 같은데 왜 안 나올까...........?
*/

//1. 입력 받기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

// 변수 선언
const testCase = input.shift();
let count, result = 0;
let score = [];
// console.log(input);

// 테스트 케이스 시행
for (let i = 0; i < testCase; i++){
    // 변수 초기화는 각자 합시다
    count= 0;
    result = 0;
    // 각 테스트 케이스
    // console.log(`${i}번째 케이스입니다`)
    for (let j = 0; j < input[i].length; j++){
        let it = input[i][j];
        if (it === 'O'){
            count++;
            result += count;
            // console.log(count, result);
        }else{
            count = 0;
        }
    }
    score.push(result);   
}

console.log(score.join('\n'));