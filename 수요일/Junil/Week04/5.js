// 내적

function solution(a, b) {
    var answer = 0
    for (let i = 0; i < a.length; i++) {
        answer += a[i] * b[i]
    }
    return answer;
}


// 테스트 1 〉	통과 (0.08ms, 33.4MB)
// 테스트 2 〉	통과 (0.05ms, 33.5MB)
// 테스트 3 〉	통과 (0.04ms, 33.5MB)
// 테스트 4 〉	통과 (0.04ms, 33.5MB)
// 테스트 5 〉	통과 (0.04ms, 33.5MB)
// 테스트 6 〉	통과 (0.07ms, 33.5MB)
// 테스트 7 〉	통과 (0.07ms, 33.5MB)
// 테스트 8 〉	통과 (0.08ms, 33.5MB)
// 테스트 9 〉	통과 (0.08ms, 33.5MB)