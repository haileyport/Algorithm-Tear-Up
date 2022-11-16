/**
 * 통과
 * 5분
 * +1
 * 
테스트 1 〉	통과 (0.03ms, 33.6MB)
테스트 2 〉	통과 (0.10ms, 33.5MB)
테스트 3 〉	통과 (0.13ms, 33.6MB)
테스트 4 〉	통과 (23.13ms, 36.9MB)
테스트 5 〉	통과 (16.24ms, 36.8MB)
테스트 6 〉	통과 (13.93ms, 36.7MB)
테스트 7 〉	통과 (7.71ms, 36.7MB)
테스트 8 〉	통과 (11.14ms, 36.9MB)
테스트 9 〉	통과 (9.24ms, 36.7MB)
테스트 10 〉	통과 (3.07ms, 36.8MB)
테스트 11 〉	통과 (0.15ms, 33.6MB)
테스트 12 〉	통과 (0.36ms, 33.6MB)
테스트 13 〉	통과 (0.16ms, 33.5MB)
테스트 14 〉	통과 (0.04ms, 33.5MB)
테스트 15 〉	통과 (0.11ms, 33.5MB)
테스트 16 〉	통과 (0.13ms, 33.5MB)
 */

function solution(a, b) {   
    let small=0;
    let large=0;
    let count = 0;
    a>=b?(small=b)&(large=a):(small=a)&(large=b);
    for (let i=small; i<=large; i++){
        count+=i;
    }
    return count;
}