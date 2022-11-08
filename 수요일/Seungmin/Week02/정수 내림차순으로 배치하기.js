function solution(n) {
    return String(n).split('').map(Number).sort((a, b) => b - a).join('') * 1;
}