function solution(n) {
    // n을 3진법 상에서 앞뒤로 뒤집고 다시 10진법으로 표현해 반환한다.
    return parseInt((n.toString(3).split("").reverse().join("")), 3);
}