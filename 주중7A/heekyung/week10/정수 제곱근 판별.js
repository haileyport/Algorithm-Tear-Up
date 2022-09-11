function solution(n) {
    let num = Math.sqrt(n);
    return num % 1 === 0 ? (num + 1) * (num + 1) : -1
}
