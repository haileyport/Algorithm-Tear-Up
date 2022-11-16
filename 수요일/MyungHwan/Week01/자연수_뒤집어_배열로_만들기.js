function solution(n) {
    let arr = n.toString().split('');
    let result = [];
    for(let i = arr.length-1; i >=0; i--){
        result.push(Number(arr[i]))
    }
    return result
}

// function solution(n) {
//     return n.toString().split('').reverse().map(o => o = parseInt(o));
// }
//todo reverse()매소드 생각을 못함