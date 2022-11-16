//콜라츠 추측

// function solution(num, count) {
//     if (count >= 500) {
//         return -1
//     }

//     if (num === 1) {
//         return count
//     } else if (num % 2 !== 0) {
//         return solution(num * 3 + 1, count++)
//     } else {
//         return solution(num / 2, count++)
//     } 

//     return count
// }


// solution(6, count = 0)

function solution(num) {
    let answer = 0
    while (num > 1) {
        if (answer >= 500) {
            return -1
        } else if (num % 2 === 0) {
            num = num / 2
        } else {
            num = num * 3 + 1
        } answer++
    }
    return answer
}

// 테스트 1 〉	통과 (0.04ms, 33.6MB)
// 테스트 2 〉	통과 (0.04ms, 33.4MB)
// 테스트 3 〉	통과 (0.04ms, 33.4MB)
// 테스트 4 〉	통과 (0.04ms, 33.4MB)
// 테스트 5 〉	통과 (0.07ms, 33.4MB)
// 테스트 6 〉	통과 (0.04ms, 33.5MB)
// 테스트 7 〉	통과 (0.07ms, 33.5MB)
// 테스트 8 〉	통과 (0.04ms, 33.4MB)
// 테스트 9 〉	통과 (0.04ms, 33.5MB)
// 테스트 10 〉	통과 (0.09ms, 33.6MB)
// 테스트 11 〉	통과 (0.08ms, 33.5MB)
// 테스트 12 〉	통과 (0.04ms, 33.4MB)
// 테스트 13 〉	통과 (0.03ms, 33.5MB)
// 테스트 14 〉	통과 (0.04ms, 33.5MB)
// 테스트 15 〉	통과 (0.04ms, 33.5MB)
// 테스트 16 〉	통과 (0.04ms, 33.5MB)