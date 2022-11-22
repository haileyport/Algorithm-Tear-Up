function solution(a, b) {
    
    return a.reduce((acc, cur, idx) => acc += a[idx] * b[idx], 0)
}