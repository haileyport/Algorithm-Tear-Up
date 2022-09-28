// 테스트 1 〉	통과 (0.10ms, 33.4MB)
// 테스트 2 〉	통과 (0.17ms, 33.5MB)
// 테스트 3 〉	통과 (0.11ms, 33.5MB)
// 테스트 4 〉	통과 (0.13ms, 33.4MB)
// 테스트 5 〉	통과 (0.21ms, 33.5MB)
// 테스트 6 〉	통과 (0.14ms, 33.5MB)
// 테스트 7 〉	통과 (0.18ms, 33.5MB)
// 테스트 8 〉	통과 (0.10ms, 33.4MB)
// 테스트 9 〉	통과 (0.11ms, 33.4MB)
// 테스트 10 〉	통과 (0.13ms, 33.4MB)
// 테스트 11 〉	통과 (0.13ms, 33.6MB)
// 테스트 12 〉	통과 (0.11ms, 33.5MB)
// 테스트 13 〉	통과 (0.12ms, 33.5MB)
// 테스트 14 〉	통과 (0.12ms, 33.4MB)
// 테스트 15 〉	통과 (0.46ms, 33.5MB)
// 테스트 16 〉	통과 (0.10ms, 33.4MB)
// 테스트 17 〉	통과 (0.11ms, 33.5MB)
// 테스트 18 〉	통과 (0.12ms, 33.5MB)

// 풀이시간 : 15분 15초
// 점수 : 9점

function solution(s) {
    // JedenCase : 모든 단어의 첫 문자가 대문자 / 그 외의 알파벳은 소문자인 문자열
    // 단, 첫문자가 알파벳이 아닐때에는 이어지는 알파벳은 소문자
    
    // 공백기준으로 나눠서
    // 첫 문자가 알파벳이냐?
    // 맞으면 첫문자는 대문자 / 뒤에는 소문자
    
    // 첫 문자가 알파벳이 아니냐?
    // 그 단어는 걍 소문자 ㄱㄱ
    
    let splitData = s.split(' ');
    
    return splitData.map(el => {
        if (typeof(el[0]) === 'string'){      
            
            return [...el].map((a, idx) => {
                if (idx === 0){
                    return a.toUpperCase();
                }else{
                    return a.toLowerCase();
                }
            }).join('')
        }else{
            return [...el].map((b, idx) => {
                if (idx !== 0 && typeof(b) === 'string'){
                    return b.toLowerCase();                    
                }else{
                    return b;
                }
            }).join('')
        }
    }).join(' ')
    
    
    

}