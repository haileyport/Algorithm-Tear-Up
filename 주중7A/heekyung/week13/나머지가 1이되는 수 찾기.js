function solution(n) {
    var answer = 0;
    while (n % answer !== 1) {
        answer++
    }
    return answer;
}
