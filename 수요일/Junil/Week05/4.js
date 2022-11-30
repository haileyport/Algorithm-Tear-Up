// 행렬의 덧셈

function solution(arr1, arr2) {
    let answer = [];
    for (let i = 0; i < arr1.length; i++) {
        let arr = []
        for (let j = 0; j < arr1[i].length; j++) {
            arr.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(arr)
    }
    return answer;
}


// 테스트 1 〉	통과 (0.13ms, 33.5MB)
// 테스트 2 〉	통과 (0.17ms, 33.6MB)
// 테스트 3 〉	통과 (0.30ms, 33.8MB)
// 테스트 4 〉	통과 (0.21ms, 33.6MB)
// 테스트 5 〉	통과 (0.15ms, 33.5MB)
// 테스트 6 〉	통과 (0.20ms, 33.5MB)
// 테스트 7 〉	통과 (0.12ms, 33.4MB)
// 테스트 8 〉	통과 (0.18ms, 33.5MB)
// 테스트 9 〉	통과 (0.91ms, 38.5MB)
// 테스트 10 〉	통과 (0.63ms, 38MB)
// 테스트 11 〉	통과 (0.45ms, 37.7MB)
// 테스트 12 〉	통과 (0.55ms, 37.8MB)
// 테스트 13 〉	통과 (0.43ms, 37.7MB)
// 테스트 14 〉	통과 (0.57ms, 38MB)
// 테스트 15 〉	통과 (0.58ms, 38MB)
// 테스트 16 〉	통과 (0.53ms, 38MB)
// 테스트 17 〉	통과 (8.01ms, 67.5MB)