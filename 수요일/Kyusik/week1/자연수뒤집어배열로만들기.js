function solution(n) {
    let arr = n.toString().split('').reverse()
    return arr.map(el => parseInt(el))
}