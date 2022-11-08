function solution(arr) {
    let sum = arr.reduce((acc, cur) => acc + cur, 0)
    return sum/arr.length
    
    // let sum = 0
    // for(let i = 0; i < arr.length; i++) {
    //     sum += arr[i]
    // }
    // return sum/arr.length
}