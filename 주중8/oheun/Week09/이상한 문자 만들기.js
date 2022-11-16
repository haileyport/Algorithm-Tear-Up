/*
통과 여부 : 통과
시간 : 10분
점수 : +13(왜 이게 13점?)

문제 : 한 개 이상의 단어, 공백 문자로 구분
- 짝수 => 대문자
- 홀수 => 소문자
- 공백 기준으로 인덱스 초기화

아이디어 :
- 공백 만나면 count 초기화

*/


function solution(s) {
    let answer = '';
    let count = 0;
    let trans = '';
    for (let i=0; i<s.length; i++){
        if(s[i] === ' ') { // 공백이면
            count=0;
            answer+=' ';   
        }else{
            if(count%2 === 0){
                trans = s[i].toUpperCase();
                answer+=trans;
            }else{
             trans = s[i].toLowerCase();
             answer+=trans;   
            }
            count++;
        }
         
    }
    return answer;
}
