//핸드폰 번호 가리기

function solution(phone_number) {
    let idx = phone_number.length - 4
    return "*".repeat(idx) + phone_number.slice(-4);
}

// 테스트 1 〉	통과 (0.03ms, 33.5MB)
// 테스트 2 〉	통과 (0.03ms, 33.4MB)
// 테스트 3 〉	통과 (0.03ms, 33.4MB)
// 테스트 4 〉	통과 (0.03ms, 33.5MB)
// 테스트 5 〉	통과 (0.03ms, 33.4MB)
// 테스트 6 〉	통과 (0.03ms, 33.5MB)
// 테스트 7 〉	통과 (0.03ms, 33.4MB)
// 테스트 8 〉	통과 (0.03ms, 33.4MB)
// 테스트 9 〉	통과 (0.03ms, 33.5MB)
// 테스트 10 〉	통과 (0.03ms, 33.4MB)
// 테스트 11 〉	통과 (0.03ms, 33.4MB)
// 테스트 12 〉	통과 (0.03ms, 33.4MB)
// 테스트 13 〉	통과 (0.03ms, 33.4MB)