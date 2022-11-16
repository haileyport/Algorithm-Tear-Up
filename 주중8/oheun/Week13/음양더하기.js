/**
 * 통과 여부 : 통과
 * 시간 : 8분
 * 점수 : +1 ㅠ
 * 
테스트 1 〉	통과 (0.11ms, 33.7MB)
테스트 2 〉	통과 (0.11ms, 33.5MB)
테스트 3 〉	통과 (0.11ms, 33.6MB)
테스트 4 〉	통과 (0.11ms, 33.5MB)
테스트 5 〉	통과 (0.11ms, 33.5MB)
테스트 6 〉	통과 (0.11ms, 33.5MB)
테스트 7 〉	통과 (0.18ms, 33.5MB)
테스트 8 〉	통과 (0.21ms, 33.5MB)
테스트 9 〉	통과 (0.13ms, 33.6MB)
 */
 function solution(absolutes, signs) {
    
    return absolutes.reduce((acc, cur, idx) => {
        // initialValue가 첫번째 요소로 들어가있어서 계산 안된 것
        // initialValue를 0으로 설정함.
        return acc += signs[idx]? Math.abs(cur): -Math.abs(cur);
    }, 0)
    
}