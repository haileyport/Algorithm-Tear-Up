function solution(arr) {
    var answer = 0;
    const sum = arr.reduce((pre, cur) => pre + cur, 0)
    answer = sum / arr.length;
    return answer;
}