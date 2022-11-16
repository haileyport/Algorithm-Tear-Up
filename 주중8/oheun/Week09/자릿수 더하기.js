/*
통과 여부 : 통과
시간 : 1분
점수 : +1

문제 : 자릿수 합

아이디어 : 새로운 방법을 어디 한 번..
- 배열 + reduce?
*/

function solution(n)
{
    let answer = String(n).split("").map(Number).reduce((a, b) => a + b); 
    return answer;
}