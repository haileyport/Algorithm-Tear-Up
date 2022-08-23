// [프로그래머스] 핸드폰 번호 가리기 / 3분 34초
// 다른사람 풀이 보니 정규식, repeat + slice 사용하더라..
function solution(phone_number) {
    let answer = '';

    for(let i = 0; i < phone_number.length; i++){
        if(i < phone_number.length - 4){
            answer += '*'; 
        }else {
            answer += phone_number[i];
        }
    }

    return answer;
}