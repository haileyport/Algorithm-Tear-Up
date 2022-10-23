function solution(arr) {

    let prevNum = arr[0]
    var answer = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (prevNum !== arr[i]) {
            prevNum = arr[i]
            answer.push(prevNum)
        }
    }

    return answer;
}
