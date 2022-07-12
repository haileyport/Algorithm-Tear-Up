/*
1110 더하기 사이클

문제 : 

1자리 => 10보다 작으면 뒷자리 0 => 두 자리
2자리 => 각 자리 수 더함. 오른쪽 자리 수와 구한 합의 오른쪽 자리 수
이걸 계속 더해서 원래 수로 돌아오도록 하기

input : 0 <= N <= 99, 정수
*/

// 1트) 틀린 이유 => Reference Error : 전역변수를 지역 변수에서 바꾸려해서 그런 듯
// 조건문 : 한자릿수라면 앞에 0 붙이기... 할 필요 없이 애초에 몫이 0이구나
/*반복문
ten, units => 결과값에서 추출
count => 횟수 증가
result => 더해지는 결과 : 이전 units + 다음 units*/

// 이전 일의 자리를 저장해야 함. 
// units => 새로운 수의 일의 자릿 수
// previous => 이전 수의 일의 자릿수

// 입력 받기
// const fs = require('fs');
// const N = fs.readFileSync("/dev/stdin").toString().trim();
// let count = 0;                  // 사이클 수 세기
// let tens = parseInt(N/10);      // tens = 십의 자리 2 
// let units = N % 10;             // units = 일의 자리 : 나머지 6
// let previous = units;           // previous = 이전 일의 자리 수 6
// let result = tens*10 + previous;      // 새로운 수 첫 번째 8


// // 2트) 오 무한 반복하고 있는데?
// // 3트) 결과값이 덧셈이 아니라 이어붙이는거임.
// // 4트) 68 86 무한 반복하는데?
// while (true){ 
//     // 지역 변수로 부르기
//     units = result % 10;        // units = 일의 자리 : 나머지 : 8
//     result = units*10 + previous;  // 이전 일의 자리와 새로운 수의 일의 자리 : 6+8 = 14
//     previous = units;           // previous = 이전 일의 자리 수 8
    
//     count++;
    
//     console.log(`units: ${units} results: ${result} previous: ${previous} count: ${count}`);
//     if(result === N){
//         break; // 같아지면 멈춘다
//     }
// }

// 2개로 나눠야 함.
// tens와 units로 나눠서 새로운 수를 구해야 함
// units 저장
// 새로운 수의 오른 편 저장
// units*10 + 오른 편이 기존 값과 같은지 비교해야 함.


// 입력 받기
const fs = require('fs');
const N = fs.readFileSync("/dev/stdin").toString().trim();
let count = 0;                  // 사이클 수 세기

let tens = parseInt(N/10); // 이러면 반복문 안에서 자꾸 N을 나누게 되고, 그렇다고 result를 N으로 하면 반복문이 끝남
let units = N%10;
let newvalue = tens + units;
let newunits = newvalue%10;
let result = unit*10 + newunits;



while(true){
    tens = parseInt(newvalue/10); // 새로운 수의 십의 자리

    count++;
    if (result === N){break;}
}


console.log(count);