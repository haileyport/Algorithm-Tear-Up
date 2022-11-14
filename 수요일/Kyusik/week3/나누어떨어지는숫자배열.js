function solution(arr, divisor) {
    let resultArr = [];
    resultArr = arr.filter((el) => el % divisor === 0)
    
    if (resultArr.length === 0) {
        return [-1];
    }
    return resultArr.sort((a, b) => a - b)
    
}