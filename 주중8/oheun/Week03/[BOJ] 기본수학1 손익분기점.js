/*
통과 여부 : 통과
공간 복잡도 : 9608 KB
시간 복잡도 : 120 ms

시간제한 : 0.35초
메모리 제한 128MB

input : A, B, C
    - A : 고정 비용
    - B : 가변 비용
    - C : 가격
output : 손익분기점 즉 최초로 이익이 발생하는 판매량을 출력한다. 손익분기점이 존재하지 않으면 -1을 출력

1712번 손익분기점

수입(판매비용)이 총 비용(=고정비용+가변비용)
n*C = A+ n*B

** 생각
1. 손익분기점이 존재하지 않는다는 건 어떻게 알 수 있을까?

** 의사코드
1. input으로 값 받아오기
    - A
    - B
    - C
2. C값이 B보다 작다면 같은 양을 생산했을 때 가변 비용이 훨씬 더 늘어나므로 손익분기점이 존재하지 않음.
3. else) 1부터 커진다.
    3.1. 항을 넘겨서 계산한다.

    //---------- 삭제-------------------------
    2.1. C*n 보다 A+ n*B가 크면 멈춤. => while문
    2.2. n은 while문 안에서 n++;

*/
const { Console } = require('console');
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' '); 
//let input = fs.readFileSync('input.txt').toString().trim().split(' '); 

const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);

let isBreakpoint = false;
let n = 0;

if (B >= C){
    console.log(-1);
}else{
    console.log(Math.floor(A/(C-B))+1);
    
//     while(!isBreakpoint){
//     n += 1; // 1대씩 올라감
//     if (C*n > A + (B*n)){
//         isBreakpoint = true;
//     }
// }
// console.log(n);
}

