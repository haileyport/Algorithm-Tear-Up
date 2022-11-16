/*
걸린시간
15분 100/100
정확성 테스트
테스트 1 〉	통과 (0.06ms, 33.5MB)
테스트 2 〉	통과 (0.04ms, 33.4MB)
테스트 3 〉	통과 (0.04ms, 33.6MB)
테스트 4 〉	통과 (0.04ms, 33.4MB)
테스트 5 〉	통과 (0.04ms, 33.5MB)
테스트 6 〉	통과 (0.04ms, 33.4MB)
테스트 7 〉	통과 (0.04ms, 33.5MB)
테스트 8 〉	통과 (0.04ms, 33.4MB)
테스트 9 〉	통과 (0.11ms, 33.4MB)
테스트 10 〉	통과 (0.04ms, 33.4MB)
테스트 11 〉	통과 (0.05ms, 33.4MB)
테스트 12 〉	통과 (0.12ms, 33.5MB)
테스트 13 〉	통과 (0.12ms, 33.4MB)
테스트 14 〉	통과 (0.12ms, 33.5MB)
테스트 15 〉	통과 (0.11ms, 33.6MB)
테스트 16 〉	통과 (0.12ms, 33.5MB)
테스트 17 〉	통과 (0.12ms, 33.5MB)
테스트 18 〉	통과 (0.12ms, 33.6MB)
효율성 테스트
테스트 1 〉	통과 (3.05ms, 36.9MB)
테스트 2 〉	통과 (3.27ms, 37.1MB)
*/

function solution(s) {
    var answer = true;
    let count = 0; 
    
    // count를 가능한 0으로 유지되게 만들기
    for(let i = 0; i < s.length; i++){
        if(s[i]==="(") count++; // 열린 괄호면 count 증가
        else count--; // 아니라면(닫는 괄호가 온다면) 올바른 괄호가 아니니까 count 감소
        if(count<0) return false;
    }

    answer = (!count) ? true : false; // count가 0이면 true 리턴

    return answer;
}