function solution(arr) {

    if (arr.length < 2) {
        return [-1]
    }
    let minArr = [...arr]
    minArr.sort((a, b) => a - b)

    return arr = arr.filter(el => el !== minArr[0])

}
