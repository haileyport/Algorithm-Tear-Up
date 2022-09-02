function solution(arr) {
    var num = arr.reduce((acc, cur) => acc + cur);

    var answer = num / arr.length
    return answer;
}