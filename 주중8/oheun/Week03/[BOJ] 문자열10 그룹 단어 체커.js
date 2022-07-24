/*
통과 여부 : 런타임에러
공간 복잡도 :
시간 복잡도 :

시간제한 : 2초
메모리 제한 128MB

input : 
- 첫째 줄에 단어의 개수 1<= N <= 100  
- 둘째 줄부터 N개의 줄에 단어가 들어온다.
- 단어는 알파벳 소문자로만 되어있고 중복되지 않으며, 길이는 최대 100이다.
output : 단어 중에 그룹단어의 개수

1316번 그룹 단어 체커
예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고,
kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만,
aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.

단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.

그룹 단어란? 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우

** 아이디어
1. 모두 연속해서 나타나야 한다.
2. 새로운 값을 배열에 추가하다가 배열에 있는 애가 들어오면 for in? break; 하는 건 어떨까?
- 1. indexOf(), lastIndexOf() 2. includes() 3. findIndex() 4. some() 5. includes() vs some()

** 의사코드
0. 변수 선언
    - 그룹단어의 수를 저장할 변수 groupChecker 선언
    - 문자를 배열에 저장할 배열 wordArr 선언
1. 입력 받기
    1.1. 첫번째  줄을 단어의 개수로 저장 => count
    1.2. 두번째 줄부터 배열의 형태로 저장 
2. 두번째 줄부터 마지막 줄까지 반복문   => i
    2.1. word[i]는 각 줄의 단어 => 변수 line으로 할당
    2.2. 각 배열의 문자열 인덱스 방문 => 이중 반복문  => j
        2.2.1. 문자가(line[j])가 배열에 존재하지 않다면 추가하기
        2.2.2. 배열에 이미 존재한다면
            2.2.2.1. 바로 직전에 나왔다면 괜찮
            2.2.2.2. 그 전에 나온 값이 다른 문자였다면 break;
        2.2.3. break되지 않았다면 groupChecker 추가
        

*/

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   // string형으로 불러옴.
//let input = fs.readFileSync('input.txt').toString().trim().split('\r\n');   // string형으로 불러옴. 왜 \r도?

let groupChecker = 0;
let count = Number(input[0]);
let word = input[1];
let wordArr = [];

for (let i = 0; i < count; i++) {
    let line = word[i];                     // i = 0 => happy
    console.log(line);
    for (let j = 0; j < line.length; j++) {
        if (wordArr.includes(line[j])){     // 각 줄의 j번째 문자가 존재하지 않는다면
            wordArr.push(line[j]);          // wordArr에 line[j] 추가
        }else{                              // 문자가 배열에 존재한다면
            if(line[j-1] !== wordArr[wordArr.length - 1]){ // push를 사용해서 배열 마지막에 저장됨.
                break; // 바로 직전에 안 나왔지만 배열에 이미 있다면 멈춰!
            }
        }
        groupChecker++;
    }

}
console.log(groupChecker);