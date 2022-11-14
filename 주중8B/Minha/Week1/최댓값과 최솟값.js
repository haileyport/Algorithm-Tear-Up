/* 걸린시간 5분 정확성: 100 */
/* 정확성 테스트
테스트 1 〉	통과 (0.10ms, 33.6MB)
테스트 2 〉	통과 (0.11ms, 33.6MB)
테스트 3 〉	통과 (0.06ms, 33.5MB)
테스트 4 〉	통과 (0.11ms, 33.6MB)
테스트 5 〉	통과 (0.10ms, 33.4MB)
테스트 6 〉	통과 (0.14ms, 33.5MB)
테스트 7 〉	통과 (0.06ms, 33.6MB)
테스트 8 〉	통과 (0.08ms, 33.4MB)
테스트 9 〉	통과 (0.10ms, 33.4MB)
테스트 10 〉	통과 (0.10ms, 33.5MB)
테스트 11 〉	통과 (0.09ms, 33.4MB)
테스트 12 〉	통과 (0.13ms, 33.5MB)
*/
function solution(s) {
    const splitted = s.split(' ').map(el => Number(el)).sort((a,b)=>a-b);
    return `${splitted[0]} ${splitted[splitted.length-1]}`;
}