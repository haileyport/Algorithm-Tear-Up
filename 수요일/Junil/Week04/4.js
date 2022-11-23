// 수박수박수박수박수박수?


// 요상한 풀이 (수박을 n 번 만큼 repeat 하고 , slice(0,n) 으로 자르기)
function solution(n) {
    var answer = "수박";
    return n % 2 === 0 ? answer.repeat(n).slice(0, n) : answer.repeat(n).slice(0, n)
}


// 테스트 1 〉	통과 (0.04ms, 33.5MB)
// 테스트 2 〉	통과 (0.04ms, 33.5MB)
// 테스트 3 〉	통과 (0.04ms, 33.6MB)
// 테스트 4 〉	통과 (0.05ms, 33.5MB)
// 테스트 5 〉	통과 (0.04ms, 33.5MB)
// 테스트 6 〉	통과 (0.03ms, 33.6MB)
// 테스트 7 〉	통과 (0.03ms, 33.5MB)
// 테스트 8 〉	통과 (0.03ms, 33.4MB)
// 테스트 9 〉	통과 (0.03ms, 33.5MB)
// 테스트 10 〉	통과 (0.03ms, 33.6MB)
// 테스트 11 〉	통과 (0.04ms, 33.5MB)
// 테스트 12 〉	통과 (0.03ms, 33.5MB)
// 테스트 13 〉	통과 (0.03ms, 33.5MB)
// 테스트 14 〉	통과 (0.03ms, 33.5MB)
// 테스트 15 〉	통과 (0.06ms, 33.7MB)
// 테스트 16 〉	통과 (0.03ms, 33.5MB)




function solution(n) {
    let a = ['수', '박'];

    for (let i = 0; a.length < n; i++) {
        i % 2 === 0 ? a.push('수') : a.push('박')
    }
    return n === 0 ? a = '' : a.join('')
}

// 테스트 1 〉	통과 (0.19ms, 33.7MB)
// 테스트 2 〉	통과 (0.39ms, 33.3MB)
// 테스트 3 〉	통과 (0.31ms, 33.7MB)
// 테스트 4 〉	통과 (0.50ms, 33.2MB)
// 테스트 5 〉	통과 (0.29ms, 33.7MB)
// 테스트 6 〉	실패 (0.04ms, 33.5MB)
// 테스트 7 〉	통과 (0.04ms, 32.9MB)
// 테스트 8 〉	통과 (0.11ms, 32.9MB)
// 테스트 9 〉	통과 (0.12ms, 33.7MB)
// 테스트 10 〉	통과 (0.04ms, 33.5MB)
// 테스트 11 〉	통과 (0.12ms, 33.6MB)
// 테스트 12 〉	통과 (0.11ms, 33.5MB)
// 테스트 13 〉	통과 (0.14ms, 33.5MB)
// 테스트 14 〉	통과 (0.11ms, 33.5MB)
// 테스트 15 〉	통과 (0.85ms, 33.9MB)
// 테스트 16 〉	통과 (0.05ms, 33.5MB)
