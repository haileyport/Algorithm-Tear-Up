/*
통과 여부 : 통과
시간 : 17분
점수 : +1

input : 전화번호
output : 뒷 4자리 제외하고 전부 *

아이디어 : splice 이용해서 바꿔주기
    - 배열 fill로 채우고, string으로 바꿔줄까?
    - 문자열에서는 padStart를 사용하는 듯
    - 아니면 repeat으로 별 채울까?

*/
function solution(phone_number) {
    let answer = '';
    
    // str.slice(0,str.length-4)는 뒷 4자리 제외한 것
    answer += '*'.repeat(phone_number.length-4) + phone_number.slice(-4);
    return answer;
    
}