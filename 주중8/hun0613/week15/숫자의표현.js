// 8점

/**
 * 
테스트 1 〉	통과 (0.17ms, 33.4MB)
테스트 2 〉	통과 (0.22ms, 33.5MB)
테스트 3 〉	통과 (0.18ms, 33.4MB)
테스트 4 〉	통과 (0.29ms, 33.5MB)
테스트 5 〉	통과 (0.15ms, 33.4MB)
테스트 6 〉	통과 (0.12ms, 33.4MB)
테스트 7 〉	통과 (0.18ms, 33.4MB)
테스트 8 〉	통과 (0.15ms, 33.4MB)
테스트 9 〉	통과 (0.13ms, 33.4MB)
테스트 10 〉	통과 (0.23ms, 33.4MB)
테스트 11 〉	통과 (0.28ms, 33.5MB)
테스트 12 〉	통과 (0.28ms, 33.6MB)
테스트 13 〉	통과 (0.19ms, 33.4MB)
테스트 14 〉	통과 (0.25ms, 33.4MB)
테스트 15 〉	통과 (0.07ms, 33.4MB)
테스트 16 〉	통과 (0.07ms, 33.4MB)
테스트 17 〉	통과 (0.13ms, 33.4MB)
테스트 18 〉	통과 (0.05ms, 33.6MB)
효율성  테스트
테스트 1 〉	통과 (3.16ms, 36MB)
테스트 2 〉	통과 (1.52ms, 37.2MB)
테스트 3 〉	통과 (3.67ms, 35.9MB)
테스트 4 〉	통과 (2.13ms, 37MB)
테스트 5 〉	통과 (2.19ms, 37.1MB)
테스트 6 〉	통과 (2.32ms, 37.1MB)
 */
function solution(n) {
    
    let count = 0;
    
    function getSum(start){
        let sum = 0;
        
        if (start === n){
            count ++;
            return;
        }
        
        for (let i = start; i <= n; i++){
            sum += i;
            if (sum === n){
                count++;
                return getSum(start + 1);
            }else if(sum > n){
                return getSum(start + 1);
            }
        }
    }
    
    getSum(1);
    
    return count;
}