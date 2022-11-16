// 나누어 떨어지는 숫자 배열

function solution(arr, divisor) {
    let answer = arr.filter((el) => Number(el) % divisor === 0)
    if (answer.length === 0) return [-1]
    return answer.sort((a, b) => a - b);
}

// 테스트 1 〉	통과 (0.18ms, 33.4MB)
// 테스트 2 〉	통과 (0.06ms, 33.5MB)
// 테스트 3 〉	통과 (0.15ms, 33.5MB)
// 테스트 4 〉	통과 (0.14ms, 33.4MB)
// 테스트 5 〉	통과 (0.14ms, 33.4MB)
// 테스트 6 〉	통과 (22.60ms, 38.1MB)
// 테스트 7 〉	통과 (0.21ms, 33.5MB)
// 테스트 8 〉	통과 (0.05ms, 33.5MB)
// 테스트 9 〉	통과 (0.15ms, 33.6MB)
// 테스트 10 〉	통과 (0.23ms, 33.6MB)
// 테스트 11 〉	통과 (0.16ms, 33.4MB)
// 테스트 12 〉	통과 (0.17ms, 33.5MB)
// 테스트 13 〉	통과 (0.29ms, 33.6MB)
// 테스트 14 〉	통과 (0.25ms, 33.6MB)
// 테스트 15 〉	통과 (0.22ms, 33.6MB)
// 테스트 16 〉	통과 (0.16ms, 33.6MB)