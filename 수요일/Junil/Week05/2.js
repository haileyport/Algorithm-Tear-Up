// 약수의 개수와 덧셈


function solution(left, right) {
    let answer = 0
    for (let i = left; i <= right; i++) {
        let count = []
        let idx = 1
        while (idx <= i) {
            if (i % idx === 0) {
                count.push(idx)
                idx += 1
            }
            if (i % idx !== 0) {
                idx += 1
            }
            if (idx === i) {
                if ((count.length + 1) % 2 === 0) {
                    answer += i
                } else if ((count.length + 1) % 2 !== 0) {
                    answer -= i
                }
            }
        }
    }
    return answer
}

// 테스트 1 〉	실패 (11.69ms, 36.8MB)
// 테스트 2 〉	통과 (3.31ms, 36.6MB)
// 테스트 3 〉	통과 (3.34ms, 36.7MB)
// 테스트 4 〉	통과 (2.60ms, 36.6MB)
// 테스트 5 〉	통과 (5.91ms, 36.9MB)
// 테스트 6 〉	통과 (2.79ms, 36.6MB)
// 테스트 7 〉	통과 (0.40ms, 33.5MB)