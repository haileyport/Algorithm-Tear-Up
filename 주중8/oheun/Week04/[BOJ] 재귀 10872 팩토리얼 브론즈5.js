/*
통과 여부 : 통과
시간 복잡도 : 116ms
공간 복잡도 : 9596 KB

[10872번 팩토리얼 / 브론즈 5]
0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.

input : 정수 N(0 ≤ N ≤ 12)
output :  N!을 출력

[개념 잡기]
- 재귀 : 자기 자신 호출

[의사코드]
본인을 호출하는 코드 작성하기

[틀린 이유]

 */


// 입력값 불러오기
let fs = require('fs');
let N = fs.readFileSync('/dev/stdin').toString().trim(); 
//let N =10;

function factorial(num){
    if(num <=1){
        return 1;
    }

    return num * factorial(num-1);
}
console.log(factorial(N));