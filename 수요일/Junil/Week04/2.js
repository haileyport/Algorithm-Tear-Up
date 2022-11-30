//없는 숫자 더하기


function solution(numbers) {
    var answer = 0;
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (let i = 0; i < arr.length; i++) {
        if (numbers.includes(arr[i]) === false) {
            answer += arr[i]
        }
    }
    return answer;
}


// 테스트 1 〉	통과 (0.05ms, 33.6MB)
// 테스트 2 〉	통과 (0.04ms, 33.5MB)
// 테스트 3 〉	통과 (0.04ms, 33.6MB)
// 테스트 4 〉	통과 (0.04ms, 33.6MB)
// 테스트 5 〉	통과 (0.05ms, 33.7MB)
// 테스트 6 〉	통과 (0.04ms, 33.6MB)
// 테스트 7 〉	통과 (0.04ms, 33.6MB)
// 테스트 8 〉	통과 (0.04ms, 33.6MB)
// 테스트 9 〉	통과 (0.04ms, 33.5MB)