function solution(a, b) {
    const arr = [a, b]
    let result = 0;
    arr.sort((a, b) => a - b)
    for(let i = arr[0]; i <= arr[1]; i++) {
        result = result + i;
    }
    return result
}