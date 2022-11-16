function solution(n) {
    let resultArr = [];
    for(let i = 0; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            resultArr.push(i);
            resultArr.push(n / i);
        }
    }
    let resultSet = new Set(resultArr)
    resultArr = [...resultSet]
    return resultArr.reduce((acc, cur) => acc + cur, 0)
}