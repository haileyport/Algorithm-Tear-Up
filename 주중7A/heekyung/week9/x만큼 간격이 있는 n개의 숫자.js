function solution(x, n) {
    var answer = [];

    count = 1
    while(count < n + 1) {
        sum = x * count
        answer.push( sum )
        count++
    }
        return answer;
}
