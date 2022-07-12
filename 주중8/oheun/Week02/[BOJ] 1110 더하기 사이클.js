// 시간 초과

/*1110 더하기 사이클

문제 : 

1자리 => 10보다 작으면 뒷자리 0 => 두 자리
2자리 => 각 자리 수 더함. 오른쪽 자리 수와 구한 합의 오른쪽 자리 수
이걸 계속 더해서 원래 수로 돌아오도록 하기

input : 0 <= N <= 99, 정수
*/

/*
1. 십의 자리는 1번만 필요하므로 변수 x
2. 일의 자리 저장하기
3. 십의 자리 + 일의 자리로 새로운 값 newvalue을 구한다
4. 새로운 값 newvalue의 일의 자리 구한다
    1) 기존 units는 previous에 저장한다
    2) 기존 units는 새로운 값의 일의 자리로 재할당한다.
5. newvalue에 previous*10 + units를 재할당한다
6. count가 추가된다
4, 5 반복하다가 초기값과 newvalue가 같으면 종료
*/ 

// 틀린 이유 1. 시간 초과 발생 : 직접 나눴을 때 문제가 발생하는 것 같다. 다른 나누기를 찾자


// 입력 받기
const fs = require('fs');
const N = fs.readFileSync("/dev/stdin").toString().trim();

result = parseInt(N, 10);
let count = 0;                  // 사이클 수 세기

let units = N%10;
let newvalue = Math.floor(N/10) + units;

while(newvalue !== N || count === 0){
    let previous = units; // previous에 기존 일의 자리를 재할당
    units = newvalue%10; // 일의 자리 재할당
    newvalue = previous*10 + units; 

    count++;
}


console.log(count);