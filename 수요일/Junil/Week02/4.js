// x만큼 간격이 있는 n개의 숫자

function solution(x, n) {
    var answer = [x];
    while (answer.length < n) {
        answer.push(x + answer[answer.length - 1])
    }
    return answer;
}

// 테스트 1 〉	통과 (0.03ms, 33.5MB)
// 테스트 2 〉	통과 (0.06ms, 33.5MB)
// 테스트 3 〉	통과 (0.07ms, 33.7MB)
// 테스트 4 〉	통과 (0.08ms, 33.6MB)
// 테스트 5 〉	통과 (0.11ms, 33.6MB)
// 테스트 6 〉	통과 (0.03ms, 33.5MB)
// 테스트 7 〉	통과 (0.09ms, 33.6MB)
// 테스트 8 〉	통과 (0.11ms, 33.5MB)
// 테스트 9 〉	통과 (0.18ms, 33.7MB)
// 테스트 10 〉	통과 (0.03ms, 33.5MB)
// 테스트 11 〉	통과 (0.08ms, 33.6MB)
// 테스트 12 〉	통과 (0.13ms, 33.6MB)
// 테스트 13 〉	통과 (0.14ms, 33.8MB)
// 테스트 14 〉	통과 (0.15ms, 33.7MB)