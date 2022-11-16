/*
통과 여부 : 통과
시간 : 8분
점수 : +2

문제 : n을 매개변수로
input : 정수
output : 정수를 자릿수별로 큰 -> 작 정렬

아이디어 :
- 정수를 문자열로 만들어서 하나씩 배열에 추가하고 sort? 근데 sort 오래 걸리지 않았나


*/

function solution(n) {
    let arr = String(n).split('');
    let answer = arr.sort((a,b)=> {return b-a;}).join("");
    return parseInt(answer);
}