function solution(n) {
    let arr = n.toString().split('');
    let result = [];
    for(let i = arr.length-1; i >=0; i--){
        result.push(Number(arr[i]))
    }
    return result
}