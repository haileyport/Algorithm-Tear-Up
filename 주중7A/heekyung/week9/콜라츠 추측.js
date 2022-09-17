function solution(num) {
    var answer = 0;
    while (num !== 1) {
        if (num % 2 === 0) {
            num = num / 2
        } else {
            num = num * 3 + 1
        }
        answer++

        if (answer >= 500) {
            return -1
        }
    }
    return answer;
}