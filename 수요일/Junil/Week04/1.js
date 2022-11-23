// 음양 더하기


//1. signs를 풀어서 부호화 시키고
//2. 배열의 길이가 같으니깐 for문 돌려서 부호와 숫자를 합치고 Number 타입으로 만들어서
//3. answer에 누적시킴 
function solution(absolutes, signs) {
    var answer = 0;
    let a = []
    signs.map((el) => el === true ? a.push('+') : a.push('-'))

    for (let i = 0; i < a.length; i++) {
        answer += Number(a[i] + absolutes[i])
    }

    return answer;
}

// 테스트 1 〉	통과 (0.36ms, 33.6MB)
// 테스트 2 〉	통과 (0.38ms, 33.6MB)
// 테스트 3 〉	통과 (0.38ms, 33.6MB)
// 테스트 4 〉	통과 (0.38ms, 33.6MB)
// 테스트 5 〉	통과 (0.38ms, 33.5MB)
// 테스트 6 〉	통과 (0.36ms, 33.5MB)
// 테스트 7 〉	통과 (0.37ms, 33.6MB)
// 테스트 8 〉	통과 (0.38ms, 33.5MB)
// 테스트 9 〉	통과 (0.38ms, 33.5MB)