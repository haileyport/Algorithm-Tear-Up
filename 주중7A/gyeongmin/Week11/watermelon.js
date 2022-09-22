function solution(n) {
    let arr = [];
    for(let i = 0; i < n; i++){
        (i%2 !== 0) ? arr.push('박') : arr.push('수')
    }
    return arr.join('').toString()
}
