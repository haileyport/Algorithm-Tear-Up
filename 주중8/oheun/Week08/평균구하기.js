/*
통과 여부 : 통과
시간 : 1분
점수 : +1
*/

function solution(arr) {
    return arr.reduce((a,b) => a+b)/arr.length;
}