/*
통과 여부 : 통과
점수 : +7

input : x부터 x씩 증가
output : 숫자 n개 리스트

아이디어 : 
    - map을 사용해볼까
    - 그 전에 배열 채우기
    - 배열을 채우면서 x를 곱하면 바로 답이 나오지 않을까?
    
유사코드 :
1. 배열을 n개로 채우기
2. map을 이용해서 x곱하기

*/

function solution(x, n) {
    // var answer = [];
    // 길이가 n인 1부터 n까지인 배열 생성    
    let answer = Array(n).fill().map((v, i) => x*(i+1));

    return answer;
}