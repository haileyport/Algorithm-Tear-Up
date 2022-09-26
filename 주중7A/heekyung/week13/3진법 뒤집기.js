function solution(n) {
    var answer = parseInt(([...n.toString(3)].reverse()).join('').toString(10), 3)

    return answer;
}
