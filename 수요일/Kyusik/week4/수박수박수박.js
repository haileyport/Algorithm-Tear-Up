function solution(n) {
    if (n % 2 === 0) {
        return '수박'.repeat(n / 2);
    } else {
        return '수박'.repeat(Math.floor(n / 2)) + '수'
    }
}