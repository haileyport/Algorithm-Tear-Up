/*
통과 여부 :통과
시간 : 8분
점수 : +7

문제 : 양의 정수 n에 대해 제곱인지 아닌지 판단
input: 
    - x의 제곱이면 => x+1의 제곱
    - 아니면 -1 return
*/

function solution(n) {
    let square = Math.sqrt(n);
    return Number.isInteger(square)?(square+1)**2:-1;
}