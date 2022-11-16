function solution(n) {
    var answer = String(n).split('')

    return answer.map(Number).reduce((acc, cur) => acc + cur);
}
