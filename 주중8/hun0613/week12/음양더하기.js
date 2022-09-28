// 테스트 1 〉	통과 (0.22ms, 33.6MB)
// 테스트 2 〉	통과 (0.38ms, 33.6MB)
// 테스트 3 〉	통과 (0.36ms, 33.4MB)
// 테스트 4 〉	통과 (0.22ms, 33.5MB)
// 테스트 5 〉	통과 (0.23ms, 33.4MB)
// 테스트 6 〉	통과 (0.24ms, 33.5MB)
// 테스트 7 〉	통과 (0.34ms, 33.4MB)
// 테스트 8 〉	통과 (0.22ms, 33.4MB)
// 테스트 9 〉	통과 (0.22ms, 33.6MB)

// 풀이시간 : 3분 35초
// 점수 : 1점


function solution(absolutes, signs) {
    // absolutes : 정수들의 절댓값을 차례대로 담은 정수 배열
    // signs : 정수들의 부호를 차례대로 담은 불리언 배열 (true : +, false : -)
    
    // answer : 총 합
 
    // 음수일 경우만 -처리 해주면 된다.
    
    let answer = [];
    
    
    absolutes.forEach((el, index) => {
        signs[index] ? answer.push(el) : answer.push(-el); 
    })
    
    return answer.reduce((a, b) => a + b)
}