function solution(arr, divisor) {
    let result = arr.filter(el => el%divisor === 0).sort(function(a,b){return a-b})
    if(result.length === 0){
        result.push(-1)
    }
    return result
}

// 1점
