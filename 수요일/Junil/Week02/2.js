// 문자열을 정수로 바꾸기


function solution(s) {
    var answer = 0;

    if (s[0] === "-") {
        return answer = Number(s.slice(1)) * -1
    } else {
        return answer = Number(s.slice())
    }
    return answer;
}

// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	통과 (0.03ms, 33.5MB)
// 테스트 3 〉	통과 (0.03ms, 33.5MB)
// 테스트 4 〉	통과 (0.03ms, 33.4MB)
// 테스트 5 〉	통과 (0.03ms, 33.5MB)
// 테스트 6 〉	통과 (0.06ms, 33.4MB)
// 테스트 7 〉	통과 (0.04ms, 33.4MB)
// 테스트 8 〉	통과 (0.05ms, 33.4MB)
// 테스트 9 〉	통과 (0.03ms, 33.4MB)
// 테스트 10 〉	통과 (0.03ms, 33.4MB)
// 테스트 11 〉	통과 (0.05ms, 33.4MB)
// 테스트 12 〉	통과 (0.04ms, 33.4MB)
// 테스트 13 〉	통과 (0.03ms, 33.4MB)
// 테스트 14 〉	통과 (0.03ms, 33.5MB)
// 테스트 15 〉	통과 (0.03ms, 33.5MB)


function solution(s) {
    var answer = Number(s)
    return answer;
}

// 테스트 1 〉	통과 (0.05ms, 33.5MB)
// 테스트 2 〉	통과 (0.02ms, 33.4MB)
// 테스트 3 〉	통과 (0.03ms, 33.5MB)
// 테스트 4 〉	통과 (0.02ms, 33.4MB)
// 테스트 5 〉	통과 (0.02ms, 33.5MB)
// 테스트 6 〉	통과 (0.02ms, 33.6MB)
// 테스트 7 〉	통과 (0.06ms, 33.4MB)
// 테스트 8 〉	통과 (0.02ms, 33.4MB)
// 테스트 9 〉	통과 (0.02ms, 33.5MB)
// 테스트 10 〉	통과 (0.03ms, 33.4MB)
// 테스트 11 〉	통과 (0.03ms, 33.4MB)
// 테스트 12 〉	통과 (0.02ms, 33.5MB)
// 테스트 13 〉	통과 (0.02ms, 33.4MB)
// 테스트 14 〉	통과 (0.04ms, 33.1MB)
// 테스트 15 〉	통과 (0.02ms, 33.5MB)