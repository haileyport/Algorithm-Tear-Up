/*
걸린시간
40분 100/100

정확성 테스트
테스트 1 〉	통과 (0.19ms, 33.5MB)
테스트 2 〉	통과 (0.75ms, 33.5MB)
테스트 3 〉	통과 (62.19ms, 36.1MB)
테스트 4 〉	통과 (276.68ms, 38.2MB)
테스트 5 〉	통과 (1299.99ms, 42.1MB)
테스트 6 〉	통과 (4.54ms, 35.4MB)
테스트 7 〉	통과 (13.17ms, 35.8MB)
테스트 8 〉	통과 (347.69ms, 38.3MB)
테스트 9 〉	통과 (1196.41ms, 42.2MB)
테스트 10 〉	통과 (114.96ms, 38.2MB)
테스트 11 〉	통과 (315.78ms, 38.2MB)
테스트 12 〉	통과 (196.99ms, 38.8MB)
테스트 13 〉	통과 (595.71ms, 39.3MB)
테스트 14 〉	통과 (0.26ms, 33.4MB)
테스트 15 〉	통과 (17.95ms, 38.8MB)
테스트 16 〉	통과 (7.91ms, 37.6MB)
테스트 17 〉	통과 (17.70ms, 37.5MB)
테스트 18 〉	통과 (7.61ms, 37.6MB)
테스트 19 〉	통과 (2.49ms, 35.5MB)
테스트 20 〉	통과 (13.32ms, 38.2MB)
테스트 21 〉	통과 (22.25ms, 38MB)
테스트 22 〉	통과 (1222.12ms, 45.4MB)
테스트 23 〉	통과 (36.17ms, 42.2MB)
테스트 24 〉	통과 (58.43ms, 41.4MB)
테스트 25 〉	통과 (0.09ms, 33.4MB)
테스트 26 〉	통과 (0.08ms, 33.5MB)
테스트 27 〉	통과 (0.08ms, 33.5MB)
*/

function solution(N, stages) {
    let answer = [];
    let people = stages.length;
    for (let i = 1; i <= N+1; i++) {
        // i번째 스테이지에 머물러 있는 유저만 필터
        let staying = stages.filter(n => n === i).length;
        // 실패율 추가
        answer.push([i, staying / people]); // [1, 1/8] [2, 3/7]
        // 실패율 계산 끝난 스테이지에 있는 사람 수를 전체에서 제외
        people -= staying;
    }
    answer.pop();
    answer = answer.sort((a,b) => b[1] - a[1]); // 두번째 값(실패율)기준으로 정렬
    return answer.map(a => a[0]);
}