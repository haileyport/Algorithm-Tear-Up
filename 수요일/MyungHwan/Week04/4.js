function solution(n) {
    let answer = '수박'.repeat(n/2)
    return n % 2 === 0 ? answer : answer + '수';
}