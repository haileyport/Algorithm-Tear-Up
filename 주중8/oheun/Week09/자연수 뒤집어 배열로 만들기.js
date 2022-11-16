/*
통과 여부 : 통과
시간 : 7분
점수 : +6

문제 : 자연수 n를 뒤집은 배열

틀린 이유 : 아 정렬이 아님
=> reverse로 뒤집어버림.
*/

function solution(n) {
    let arr = String(n).split("").map(Number).reverse();
    return arr;
}