// 테스트 1 〉	통과 (0.09ms, 33.5MB)
// 테스트 2 〉	통과 (0.08ms, 33.5MB)
// 테스트 3 〉	통과 (0.10ms, 33.4MB)
// 테스트 4 〉	통과 (0.08ms, 33.5MB)
// 테스트 5 〉	통과 (0.07ms, 33.4MB)
// 테스트 6 〉	통과 (0.09ms, 33.5MB)
// 테스트 7 〉	통과 (0.12ms, 33.4MB)
// 테스트 8 〉	통과 (0.17ms, 33.5MB)
// 테스트 9 〉	통과 (0.09ms, 33.4MB)

// 풀이시간 : 2분
// 점수 : 1점




function solution(a, b) {
    let answer = 0;
    
    a.forEach((el, idx) => {
        answer = answer + (el * b[idx]);    
    })
    
    return answer;
}