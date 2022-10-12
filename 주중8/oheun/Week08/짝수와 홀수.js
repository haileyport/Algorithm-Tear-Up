/*
통과 여부 : 통과
시간 : 5분
점수 : +3 

틀렸던 이유 : 0일 때 0%2는 0이라서*/

function solution(num) {
    return num%2===0 ? "Even": "Odd";
}